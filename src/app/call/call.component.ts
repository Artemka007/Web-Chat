import {AfterContentInit, AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { IUser } from '../models/account.model';
import {ChatService} from "../services/chat.service";

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit, AfterViewInit {
  @ViewChild("localVideo", {static: false}) localVideo?: ElementRef<HTMLVideoElement>

  private remotePeers: { [sid: number]: RTCPeerConnection } = {}
  private gainNode?: GainNode

  @Input() sid: number = -1
  @Input() isOpen: boolean = false
  @Input() meetingName: string = ""
  @Input() user: IUser | null = null

  @Output() onexit = new EventEmitter<any>()
  // current other id of peer connection
  otherSid: number = -1
  // other ids of peer connections
  otherSids: number[] = []
  videoEnabled: boolean = false
  audioEnabled: boolean = false
  localStream?: MediaStream
  remoteStreams: { id: number, username: string, stream: MediaStream }[] = []
  lastStreamId: string = ''

  constructor(private _chatService: ChatService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this._chatService.connectToCalls()
    this.callHandle()
    this._chatService.calls.next({event: "call-connect", sid: this.sid, data: {}})
  }

  callHandle() {
    if (this.localVideo) {
      this.getUserMediaStream({audio: !this.audioEnabled, video: !this.videoEnabled}).then(() => {
        this.localVideo!.nativeElement.play().catch(e => {
          console.log(e.message)
        })
      }).catch(e => {
        console.log(e.message)
      })
    }
    this.call().then(() => {
      this._chatService.calls.subscribe(async data => {
        await this.subscribeToWSConnection(data)
      })
    })
  }

  stopCall(sid?: number) {
    if (!sid) {
      this._chatService.calls.next({event: "call-disconnect", sid: this.sid, data: {}})
    }
    this.remotePeers[sid || this.sid].close()
    if(!sid) {
      this.localStream?.getTracks().forEach(t => {
        t.stop()
      })
      this.onexit.emit()
      if(this.localVideo) this.localVideo.nativeElement.srcObject = null
    }
    else {
      let r = this.remoteStreams
      const el = r.find(i => i.id === sid)
      if (el) {
        const id = r.indexOf(el)
        r.splice(id, 1)
        this.remoteStreams = r
      }
    }
  }

  setEnabled(stream: "audio" | "video", enabled: boolean) {
    this.enable(stream, enabled)
  }

  private enable(stream: "audio" | "video", enabled: boolean) {
    const isAllEnabled = (stream === "audio" && this.videoEnabled && enabled) || (stream === "video" && this.audioEnabled && enabled)

    if (this.localStream) {
      if (!isAllEnabled) {
        if(stream === "audio") this.audioEnabled = enabled
        else if (stream === "video") this.videoEnabled = enabled
      } else {
        this.audioEnabled = true
        this.videoEnabled = true
      }
      this.getUserMediaStream({video: !this.videoEnabled, audio: isAllEnabled ? true : !this.audioEnabled}).then((s) => {
        if (isAllEnabled) {
          this.localStream!.getTracks().forEach(t => {
            t.stop()
          })
        }
        this.localVideo!.nativeElement.srcObject = this.localStream!
        this.call().catch(e => {
          console.log(e.name + '\n' + e.message)
        })
      }).catch(e => {
        console.log(e.name + '\n' + e.message)
      })
    }
  }

  private async getUserMediaStream(mediaConstrains: MediaStreamConstraints): Promise<MediaStream> {
    const isStart = !!this.localStream
    const stream = await navigator.mediaDevices.getUserMedia(mediaConstrains)

    let audioContext = new AudioContext()
    this.gainNode = audioContext.createGain()
    let audioSource = audioContext.createMediaStreamSource(stream)
    let audioDestination = audioContext.createMediaStreamDestination()
    audioSource.connect(this.gainNode)
    this.gainNode.connect(audioDestination)

    stream.removeTrack(stream.getAudioTracks()[0])
    stream.addTrack(audioDestination.stream.getAudioTracks()[0])

    console.log(stream.getAudioTracks())

    this.gainNode.gain.value = 0

    this.localStream = stream
    this.localVideo!.nativeElement.srcObject = this.localStream
    isStart && this.localVideo!.nativeElement.play()
    return stream
  }

  private async call(): Promise<void> {
    

    !this.remotePeers[this.sid] && this.createPeerConnection()

    if (this.localStream && this.remotePeers[this.sid]) {
      this.localStream.getTracks().length > 0 && this.localStream.getTracks().forEach(track => {
        this.remotePeers[this.sid]?.addTrack(track, this.localStream!)
        console.log({track})
      })
      try {
        const offer: RTCSessionDescriptionInit = await this.remotePeers[this.sid].createOffer({
          offerToReceiveAudio: true,
          offerToReceiveVideo: true,
        })
        await this.remotePeers[this.sid].setLocalDescription(offer)
        this._chatService.calls.next({event: "offer", data: offer, sid: this.sid})
      } catch (e) {
        console.error(e)
      }
    }
  }

  private createPeerConnection() {
    let peerConnection = new RTCPeerConnection()
    this.remotePeers[this.sid] = this.setPeerCallbacks(peerConnection, this.sid)
  }

  private setPeerCallbacks(peer: RTCPeerConnection, sid: number) {
    peer.onicecandidate = (e) => {
      if (e.candidate) {
        this._chatService.calls.next({
          event: 'ice-candidate',
          data: e.candidate,
          sid: sid
        })
      }
    }
    peer.ontrack = (e) => {
      const mediaStream = e.streams[0]
      if (e.streams[0].id === this.lastStreamId) {
        let s = this.remoteStreams.find(i => i.stream.id === this.lastStreamId)
        s && this.remoteStreams.splice(this.remoteStreams.indexOf(s), 1)
      } else {
        this.lastStreamId = e.streams[0].id
      }
      this.otherSids.forEach(id => {
        const s = this.remoteStreams.find(i => i.id === id)
        s && this.remoteStreams.splice(this.remoteStreams.indexOf(s), 1)
      })
      this.remoteStreams.push({id: this.otherSid, username: this.user?.username || "", stream: mediaStream})
    }
    peer.onconnectionstatechange = (e) => {
    }
    return peer
  }

  private async offerHandle(data: any) {
    if (data.sid !== this.sid) {
      this.otherSid = data.sid
      if (!this.remotePeers[data.sid]) this.remotePeers[data.sid] = this.setPeerCallbacks(new RTCPeerConnection({'iceServers': [{'urls': 'stun:stun.l.google.com:19302'}]}), data.sid)
      this.remotePeers[data.sid].setRemoteDescription(new RTCSessionDescription(data.data)).then(async () => {
        const answer = await this.remotePeers[data.sid].createAnswer()
        await this.remotePeers[data.sid].setLocalDescription(answer)
        this._chatService.calls.next({
          event: 'answer',
          sid: data.sid,
          data: answer
        })
      })
    }
    this.otherSids.push(data.sid)
  }

  private async subscribeToWSConnection(data: any) {
    switch (data.event) {
      case "call-connect": {
        this.call()
        break
      }
      case "call-disconnect": {
        this.stopCall(data.sid)
        break
      }
      case "offer": {
        await this.offerHandle(data)
        break
      }
      case 'ice-candidate': {
        // add ICE candidate to added peer conection
        await this.remotePeers[data.sid]?.addIceCandidate(new RTCIceCandidate(data.data)).catch(e => {
          console.log(e.name + '\n' + e.message)
        })
        break
      }
      case 'answer': {
        if (data.sid === this.sid && this.remotePeers[data.sid]) {
          // create new peer connection
          let sd = new RTCSessionDescription(data.data)
          // add this in remote peers connections
          await this.remotePeers[data.sid].setRemoteDescription(sd)
        }
        break
      }
      default:
        console.log("ERROR! Unresolved event")
    }
  }

}
