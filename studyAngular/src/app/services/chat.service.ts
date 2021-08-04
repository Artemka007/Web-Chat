import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {IChat, IMessage} from "../models/chat.model";
import {WebsocketsService} from "./websockets.service";
import { map } from 'rxjs/operators';
import {ApiService} from "./api.service";
import {baseURI} from "../models/api.model";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public message: Subject<{event: string} & IMessage | {event: string} & any>,
    public calls: Subject<{event: string, sid: number, data: any}>,
    private wsService: WebsocketsService,
    private _api: ApiService,
  ) {
    this.message = <Subject<{event: string} & IMessage | any>>wsService.connect('ws://127.0.0.1:8000/chat/').pipe(map((res): {event: string} & IMessage | {event: string} & IChat => {
      return JSON.parse(res.data)
    }))
  }

  getAllChats() {
    return this._api.getRequest<{chats: IChat[]}>(baseURI + 'chats/')
  }

  uploadAudioMessage(formData: FormData) {
    return this._api.postRequest<{audio: number}>(baseURI + 'upload_message/', formData)
  }

  connectToCalls() {
    this.calls = <Subject<{event: string} | any>>this.wsService.connect(`ws://127.0.0.1:8000/call/${1}/`).pipe(map((res): {event: string} => {
      return JSON.parse(res.data)
    }))
    return this.calls
  }
}



