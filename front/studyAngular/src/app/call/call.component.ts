import {AfterContentInit, AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { interval } from 'rxjs';
import { take, takeWhile } from 'rxjs/operators';
import { IUser } from '../models/account.model';
import {ChatService} from "../services/chat.service";

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit, AfterViewInit {
  @ViewChild("localVideo", {static: false}) localVideo!: ElementRef<HTMLVideoElement>
  @ViewChild("videoCanvas", {static: false}) videoCanvas!: ElementRef<HTMLCanvasElement>
  @ViewChildren("remoteVideos") remoteVideos: QueryList<ElementRef<HTMLVideoElement>> = new QueryList<ElementRef<HTMLVideoElement>>()
  @ViewChildren("remoteVideoCanvases") remoteVideoCanvases: QueryList<ElementRef<HTMLCanvasElement>> = new QueryList<ElementRef<HTMLCanvasElement>>()

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
  volumeCoordinates: {x: number, y: number} = {x: 0, y: 0}
  videoCoordinates: {x: number, y: number} = {x: 0, y: 0}
  changeVolumeIsOpen: boolean = false
  chooseVideoEffectIsOpen: boolean = false
  volumeValue: number = 1

  constructor(private _chatService: ChatService) {
  }

  ngOnInit(): void {
    this.volumeValue = parseFloat(localStorage.getItem("volume") || "1")
  }

  ngAfterViewInit() {
    this.remoteVideoCanvases.changes.subscribe(_ => {
      let video: HTMLVideoElement = this.remoteVideos.last.nativeElement,
          id: number              = this.remoteVideos.length - 1
      interval(250).pipe(take(1)).subscribe(() => {
        this.drawVideoIntoCanvas(video, id)
        video.style.display = "none"
      })
    })
    this._chatService.connectToCalls()
    this.callHandle()
    this._chatService.calls.next({event: "call-connect", sid: this.sid, data: {}})
  }

  public callHandle() {
    this.getUserMediaStream({audio: !this.audioEnabled, video: !this.videoEnabled}).then((s) => {
      this.localVideo!.nativeElement.play().then(() => {
        this.localVideo!.nativeElement.volume = 0
      }).catch(e => {
        console.log(e.message)
      })
    }).catch(e => {
      console.log(e.message)
    })
    this.call().then(() => {
      this._chatService.calls.subscribe(async data => {
        await this.subscribeToWSConnection(data)
      })
    })
  }

  public stopCall(sid?: number) {
    if (!sid) {
      this._chatService.calls.next({event: "call-disconnect", sid: this.sid, data: {}})
    }
    this.remotePeers[sid || this.sid].close()
    if(!sid) {
      if(this.localVideo) this.localVideo.nativeElement.srcObject = null
      this.localStream?.getTracks().forEach(t => {
        t.stop()
      })
      this.onexit.emit()
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

  public changeVolume(value: number) {
    if(this.gainNode) {
      this.gainNode.gain.value = value
    }
  }

  public hoverToChangeVolume(e: MouseEvent) {
    //@ts-ignore
    let ct = e.currentTarget[0]
    if(ct) {
      this.volumeCoordinates = {x: ct.offsetLeft + 75, y: ct.offsetTop - 20}
      this.changeVolumeIsOpen = !this.changeVolumeIsOpen
    }
  }

  public hoverToChooseVideoEffect(e: MouseEvent) {
    //@ts-ignore
    let ct = e.currentTarget[0]
    if(ct) {
      this.videoCoordinates = {x: ct.offsetLeft + 75, y: ct.offsetTop - 20}
      this.chooseVideoEffectIsOpen = !this.chooseVideoEffectIsOpen
    }
  }

  public onfilter(filter:string) {
    let c = this.videoCanvas.nativeElement.getContext("2d")
    if(c) c.filter = filter
    this._chatService.calls.next({"event": "change-video-filter", "sid": this.sid, "data": {filter}})
  }

  private async getUserMediaStream(mediaConstrains: MediaStreamConstraints): Promise<MediaStream> {
    const stream = await navigator.mediaDevices.getUserMedia(mediaConstrains),
          audioContext = new AudioContext(),
          audioSource = audioContext.createMediaStreamSource(stream),
          audioDestination = audioContext.createMediaStreamDestination()
    let currentVolume = localStorage.getItem("volume")
    if (!currentVolume) {
      localStorage.setItem("volume", "1")
      currentVolume = "1"
      console.log(localStorage)
    }
    this.gainNode = audioContext.createGain()
    audioSource.connect(this.gainNode)
    this.gainNode.connect(audioDestination)
    stream.removeTrack(stream.getAudioTracks()[0])
    stream.addTrack(audioDestination.stream.getAudioTracks()[0])
    this.gainNode.gain.value = parseFloat(currentVolume)
    this.localStream = stream
    this.localVideo!.nativeElement.srcObject = this.localStream
    this.localVideo.nativeElement.onplay = (e) => {
      let lv = this.localVideo.nativeElement
      interval(100).pipe(take(1)).subscribe(() => {
        this.drawVideoIntoCanvas(lv)
      })
    }
    return stream
  }

  private drawVideoIntoCanvas(video: HTMLVideoElement, id?:number) {
    let canvas = id !== undefined ? this.remoteVideoCanvases.toArray()[id].nativeElement : this.videoCanvas.nativeElement,
        context = canvas.getContext('2d'),
        mediaWidth = video.offsetWidth,
        mediaHeight = video.offsetHeight
    canvas.width = mediaWidth
    canvas.height = mediaHeight
    canvas.style.width = mediaWidth + "px"
    canvas.style.height = mediaHeight + "px"
    this.draw(video, context, mediaWidth, mediaHeight)
  }

  /**
   * Drawing video into canvas with any filters
   * @param v video element for draw into canvas
   * @param c canvas element
   * @param w width of video element for set to canvas
   * @param h height of video element for set to canvas
   */
  private draw(v:HTMLVideoElement, c:CanvasRenderingContext2D | null, w:number, h:number) {
    if(c) {
      c.drawImage(v, 0, 0, w, h)
      if(!this.videoEnabled) interval(1000 / 24).pipe(take(1)).subscribe(() => {
        this.draw(v, c, w, h)
      })
    }
  }

  private async call(): Promise<void> {
    !this.remotePeers[this.sid] && this.createPeerConnection()

    if (this.localStream && this.remotePeers[this.sid]) {
      this.localStream.getTracks().length && this.localStream.getTracks().forEach(track => {
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
    peer.onsignalingstatechange = e => {
      
      console.log(this.remotePeers[this.sid].signalingState)
    }
    return peer
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
        if (data.sid !== this.sid) {
          this.otherSid = data.sid
          if (!this.remotePeers[data.sid]) this.remotePeers[data.sid] = this.setPeerCallbacks(new RTCPeerConnection({'iceServers': [{urls: 'stun:stun.l.google.com:19302'}]}), data.sid)
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
        break
      }
      case 'ice-candidate': {
        // add ICE candidate to added peer conection
        this.remotePeers[data.sid]?.addIceCandidate(new RTCIceCandidate(data.data)).catch(e => {
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
      case "change-video-filter": {
        let c = document.getElementById(data.sid)
        if (c) {
          //@ts-ignore
          let context = c.getContext('2d')
          context.filter = data.data.filter
        }
        break
      }
      default:
        console.log("ERROR! Unresolved event")
    }
  }

  public setEnabled(stream: "audio" | "video", enabled: boolean) {
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
        this.localStream!.getTracks().forEach(t => {
          if(isAllEnabled) t.stop()
          else t.kind === stream && enabled && t.stop()
        })
        this.localVideo.nativeElement.srcObject = this.localStream!
        
        this.call().catch(e => {
          console.log(e.name + '\n' + e.message)
        })
      }).catch(e => {
        console.log(e.name + '\n' + e.message)
      })
    }
  }
}
