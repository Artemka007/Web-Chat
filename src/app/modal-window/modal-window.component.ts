import {AfterViewInit, Component, EventEmitter, ElementRef, Input, OnInit, Output, ViewChild} from '@angular/core';
import {statusComponentType} from "../chat/chat.component";

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {

  @Input() status?: statusComponentType
  @Input() header?: string

  @Output() onclose = new EventEmitter<any>()
  @Output() oncheck = new EventEmitter<any>()
  @Output() oncallback = new EventEmitter<any>()

  @ViewChild('window', {static: false})
  modalWindow?: ElementRef<HTMLDivElement>

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.onclose.emit()
  }

  check() {
    this.oncheck.emit()
  }

  callback() {
    this.oncallback.emit()
  }
}
