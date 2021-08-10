import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-choose-video-effects',
  templateUrl: './choose-video-effects.component.html',
  styleUrls: ['./choose-video-effects.component.css']
})

export class ChooseVideoEffectsComponent implements OnInit, AfterViewInit {
  @Input() video!: HTMLVideoElement
  @Input() canvas!: HTMLCanvasElement
  @Input() coordinates!: {x: number, y: number}
  @Output() onfilter = new EventEmitter<string>()
  @ViewChild("grayscaleCanvas") grayscaleCanvas!: ElementRef<HTMLCanvasElement>
  @ViewChild("sepiaCanvas") sepiaCanvas!: ElementRef<HTMLCanvasElement>
  @ViewChild("normalCanvas") normalCanvas!: ElementRef<HTMLCanvasElement>
  @ViewChild("container") container!: ElementRef<HTMLDivElement>

  width: number = 0
  height: number = 0

  constructor() { }

  ngOnInit(): void {
    this.width = this.video.offsetWidth
    this.height = this.video.offsetHeight
  }

  ngAfterViewInit() {
    let height = 100,
        width = this.width * (height / this.height) 

    this.container.nativeElement.style.maxWidth = width * 3 + 60 + "px"

    this.drawVideoIntoCanvas(this.grayscaleCanvas.nativeElement, this.video, "grayscale()", width, height)
    this.drawVideoIntoCanvas(this.sepiaCanvas.nativeElement, this.video, "sepia()", width, height)
    this.drawVideoIntoCanvas(this.normalCanvas.nativeElement, this.video, "none", width, height)
  }

  drawVideoIntoCanvas(c:HTMLCanvasElement, v:HTMLVideoElement, filter:string, w?:number, h?:number) {
    let context = c.getContext('2d'),
        mediaWidth = w || this.width,
        mediaHeight = h || this.height
    c.width = mediaWidth
    c.height = mediaHeight
    c.style.width = mediaWidth + "px"
    c.style.height = mediaHeight + "px"
    this.draw(v, context, mediaWidth, mediaHeight)
    this.filter(context, filter)
  }
  
  click(filter:string) {
    this.onfilter.emit(filter)
  }

  private draw(v:HTMLVideoElement, c:CanvasRenderingContext2D | null, w:number, h:number) {
    if(c) {
      c.drawImage(v, 0, 0, w, h)
      interval(1000 / 24).pipe(take(1)).subscribe(() => {
        this.draw(v, c, w, h)
      })
    }
  }

  private filter(context:CanvasRenderingContext2D | null, filter:string) {
    if (context) {
      context.filter = filter
    }
  }
}
