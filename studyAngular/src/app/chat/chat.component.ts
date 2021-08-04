import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../services/user.service";
import {ChatService} from "../services/chat.service";
import {IUser} from "../models/account.model";
import {IChat, IMessage, IMessageCreate} from "../models/chat.model";
import {ActivatedRoute, Router} from "@angular/router";
import {interval} from "rxjs";
import {take, takeWhile} from "rxjs/operators";
import {NgAudioRecorderService, OutputFormat} from "ng-audio-recorder";

export type statusComponentType =
  | "reading"
  | "edit"
  | "delete"
  | "forward"
  | "reply"


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewInit {

  @ViewChild('chatBody', {static: false}) chatBody?: ElementRef<HTMLDivElement>
  chatId: number = -1
  reader: IUser | null = null
  user: IUser | null = null
  chat: IChat | null = null
  otherUser: IUser | undefined = this.chat?.users.filter(i => i.id !== this.user?.id)[0]
  selectedMessages: IMessage[] = []
  isLoading: boolean = false
  editBody: string = ""
  isCheck: true | null = null
  isRecording: boolean = false
  callIsOpen: boolean = false
  audio?: any
  status?: statusComponentType
  message: IMessageCreate = {
    user: this.user?.id ? this.user?.id : -1,
    chat: this.chat?.id ? this.chat?.id : -1,
    body: "",
    date: (new Date()).toDateString(),
  }

  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService,
    private _chatService: ChatService,
    private _audioRecorderService: NgAudioRecorderService
  ) {
  }

  ngOnInit(): void {
    this.subscribeToMessage()
    this._route.queryParams.subscribe(p => {
      this.chatId = parseInt(p['id'])
      this.message.chat = parseInt(p['id'])
    })

    this._userService.getAuthUser().subscribe(data => {
      this.user = data.user
      if (data.user) this.message.user = data.user?.id
    })

    this._chatService.message.next({event: "get_chat", id: this.chatId})

    interval(2000)
      .pipe(takeWhile((i) => {
        return true
      }))
      .subscribe(i => {
        if (this.reader) this.reader = null
      })
  }

  submit() {
    this.isLoading = true
    this.message.date = new Date().toDateString()
    if (this.status === 'edit') this.edit()
    else if (this.status === 'reply') this.reply()
    else this._chatService.message.next({event: "send_message", ...this.message})
    this.message.body = ""
  }

  exitCall() {
    this.callIsOpen = false
  }

  read() {
    this._chatService.message.next({event: "reading_message"})
  }

  edit() {
    this.selectedMessages[0].body = this.editBody
    this._chatService.message.next({event: "edit_message", message: this.selectedMessages[0]})
  }

  delete() {
    this.isLoading = true
    let ids = this.selectedMessages.map(i => {
      return i.id
    })
    this._chatService.message.next({event: 'delete_message', messages: JSON.stringify(ids), for_all: this.isCheck})
  }

  forward(id: number, chatId: number) {
  }

  reply() {
    this._chatService.message.next({event: "reply_message", message: this.message, pk: this.selectedMessages[0].id})
  }

  call() {
    this.callIsOpen = true
  }

  stopCall() {
    this.callIsOpen = false
  }

  select(id: number) {
    if (this.chat) {
      let m = this.chat.chat_messages.find(i => i.id === id)
      if (m) {
        let idx = this.selectedMessages.indexOf(m)
        if (idx > -1) this.selectedMessages.splice(idx, 1)
        else this.selectedMessages.push(m)
      }
    }
  }

  checkMessageIsSelect(id: number): boolean {
    if (this.chat) {
      let m = this.chat.chat_messages.find(i => i.id === id)
      if (m) {
        let idx = this.selectedMessages.indexOf(m)
        return idx > -1;
      }
    }
    return false
  }

  checkPossibleMethods(): Array<{ text: string, status: statusComponentType, method: (...args: any[]) => void }> {
    let defaultValues: Array<{ text: string, status: statusComponentType, method: (...args: any[]) => void }> = [
      {
        text: "Редактировать",
        status: "edit",
        method: this.edit
      },
      {
        text: "Удалить",
        status: "delete",
        method: this.delete
      },
      {
        text: "Переслать",
        status: "forward",
        method: this.forward
      },
      {
        text: "Ответить",
        status: "reply",
        method: this.reply
      }
    ]
    let ms = this.selectedMessages
    if (ms.length === 0) return []
    else if (ms.length === 1 && ms[0].user === this.user?.id) return defaultValues
    else if (ms.length === 1 && ms[0].user !== this.user?.id) return [defaultValues[1], defaultValues[2], defaultValues[3]]
    else if (ms.length > 1) return [defaultValues[1], defaultValues[2]]
    else return []
  }

  setComponentStatus(status?: statusComponentType) {
    if (status === 'edit') this.editBody = this.selectedMessages[0].body
    this.status = status
  }

  check() {
    this.isCheck = !this.isCheck ? true : null
  }

  ngAfterViewInit() {
  }

  startRecording() {
    this.isRecording = true
    this._audioRecorderService.startRecording();
  }

  stopRecording() {
    this.isRecording = false
    this._audioRecorderService.stopRecording(OutputFormat.WEBM_BLOB).then((output) => {
      let f = new FormData()
      f.append('audio', output)
      this._chatService.uploadAudioMessage(f).subscribe(data => {
        console.log(data)
        this.message.audio_message = data.audio
        this.submit()
        this.message.audio_message = undefined
      })
    }).catch(errorCase => {
      console.log(errorCase)
    });
  }

  resetRecording() {
    this.isRecording = false
    this._audioRecorderService.stopRecording(OutputFormat.WEBM_BLOB).then(out => {
    })
  }

  private getChatHandle(data: any) {
    this.chat = data.chat
    this.otherUser = this.chat?.users.filter(i => i.id !== this.user?.id)[0]
    if (this.chatBody && this.chat) this.chatBody.nativeElement.scrollTop = this.chatBody.nativeElement.scrollHeight
  }

  private sendChatHandle(data: any) {
    this.chat && this.chat.chat_messages.push(data.message)
    if (this.chatBody) interval(100).pipe(take(2)).subscribe(i => {
      this.chatBody!.nativeElement.scrollTop = this.chatBody!.nativeElement.scrollHeight
    })
  } 

  private editMessageHandle(data: any) {
    if (this.chat) {
      let m = this.chat.chat_messages.find(i => i.id === data['message'].id)
      if (m) {
        m.body = data['message'].body
      }
    }
  } 

  private deleteMessageHandle(data: any) {
    if (this.chat) {
      this.chat.chat_messages = this.chat?.chat_messages.filter(i => data.ids.indexOf(i.id) === -1)
      this.selectedMessages = []
    }
  }

  subscribeToMessage() {
    this._chatService.message.subscribe((data) => {
      switch (data.event) {
        case 'get_chat': {
          this.getChatHandle(data)
          break
        }
        case 'send_message': {
          this.sendChatHandle(data)
          break
        }
        case 'reading_message': {
          this.reader = data.reader
          break
        }
        case 'edit_message': {
          this.editMessageHandle(data)
          break
        }
        case 'delete_message': {
          this.deleteMessageHandle(data)
        }
      }
      this.isLoading = false
    })
  }

}
