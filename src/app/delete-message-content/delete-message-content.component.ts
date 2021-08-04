import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-delete-message-content',
  templateUrl: './delete-message-content.component.html',
  styleUrls: ['./delete-message-content.component.css']
})
export class DeleteMessageContentComponent implements OnInit {

  @Output() check = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  checkDeleteForAll: true | null = null

  setCheckDeleteForAll() {
    this.checkDeleteForAll = this.checkDeleteForAll ? null : true
    this.check.emit()
  }
}
