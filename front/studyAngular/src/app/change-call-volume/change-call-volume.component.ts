import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ComponentRef, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-change-call-volume',
  templateUrl: './change-call-volume.component.html',
  styleUrls: ['./change-call-volume.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({transform: 'none'})),
      state('close', style({transform: 'scaleY(0)'})),
      transition('close <=> open', animate(100))
    ])
  ],
})
export class ChangeCallVolumeComponent implements OnInit, AfterViewInit {
  @Input() coordinates: {x: number, y: number} = {x: 0, y: 0}
  @Input() label?: string
  @Output() onchange = new EventEmitter<number>()

  value: number = 1
  left: number = 292 * parseFloat(localStorage.getItem('volume') || "1")
  changeIsActive: boolean = false
  lastCoordinate: number = 0

  constructor() { }

  ngOnInit(): void {
    this.value = parseFloat(localStorage.getItem('volume') || "1")
    console.log({value: this.value})
    document.addEventListener("mouseup", this.mouseup)
    navigator.mediaDevices.enumerateDevices().then(function(devices) {
      devices.forEach(function(device) {
        console.log(device.kind + ": " + device.label +
                " id = " + device.deviceId);
      });
    })
  }

  ngAfterViewInit(): void {
    this.value = parseFloat(localStorage.getItem('volume') || "1")
    this.left = 292 * this.value
  }

  mousemove(e: MouseEvent) {
    if(this.changeIsActive && this.left <= 292 && this.left >= 0) {
      this.left += (e.clientX - this.lastCoordinate)
      this.lastCoordinate = e.clientX
      this.value = (this.left / 292)
      this.change(this.value)
    } else {
      if (this.left > 292) {
        this.left = 292
      } else if (this.left < 0) {
        this.left = 0
      }
    }
  }

  mousedown(e: MouseEvent) {
    this.changeIsActive = true
    this.lastCoordinate = e.clientX
  }

  mouseup(e: MouseEvent) {
    this.changeIsActive = false
  }

  change(value: number) {
    localStorage.setItem("volume", value.toString())
    this.value = value
    this.left = 292 * value
    this.onchange.emit(value)
  }

}
