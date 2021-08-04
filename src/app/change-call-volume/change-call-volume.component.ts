import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-change-call-volume',
  templateUrl: './change-call-volume.component.html',
  styleUrls: ['./change-call-volume.component.css']
})
export class ChangeCallVolumeComponent implements OnInit {
  @Input() top: number = 0
  @Input() left: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
