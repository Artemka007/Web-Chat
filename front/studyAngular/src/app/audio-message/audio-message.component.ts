import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-audio-message',
  templateUrl: './audio-message.component.html',
  styleUrls: ['./audio-message.component.css']
})
export class AudioMessageComponent implements OnInit {
  @Input() src?: string

  @ViewChild("KjlKdD", {static: true}) audio?: ElementRef<HTMLAudioElement>

  play: boolean = false
  loading: boolean = true

  currentTime: number = 0
  duration: number = 1

  constructor() { }

  ngOnInit(): void {
    if(this.audio) {
      this.audio.nativeElement.ondurationchange = () => {
        this.duration = this.audio!.nativeElement.duration
        console.log(this.duration)
      }
      this.audio.nativeElement.onloadedmetadata = (e) => {
        this.duration = this.audio!.nativeElement.duration
        console.log(this.duration)
        this.loading = false
      }
      this.audio.nativeElement.onended = (e) => {
        this.play = false
        if(this.audio) this.audio.nativeElement.currentTime = 0
      }
    }
  }

  playAudio(ev: MouseEvent) {
    ev.stopPropagation()
    if(this.audio) {
      console.log('playing...')
      this.audio.nativeElement.ontimeupdate = (e) => {
        this.currentTime = this.audio?.nativeElement.currentTime || 0
      }
      this.play = true
      this.audio && this.audio.nativeElement.play()
    }
  }

  pauseAudio(ev: MouseEvent) {
    ev.stopPropagation()
    if(this.audio) {
      this.audio.nativeElement.pause()
      this.play = false
    }
  }
}
