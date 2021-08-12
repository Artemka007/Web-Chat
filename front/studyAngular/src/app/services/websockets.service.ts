import { Injectable } from '@angular/core';
import {Observable, Observer, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebsocketsService {

  constructor(private subject: Subject<MessageEvent>) { }

  public connect(url: string): Subject<MessageEvent> {
    if (!this.subject.observers.length) {
      this.subject = this.create(url)
    }
    return this.subject
  }

  private create(url: string): Subject<MessageEvent> {
    let ws = new WebSocket(url)
    let observable = new Observable((obs: Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs)
      ws.onerror = obs.error.bind(obs)
      ws.onclose = obs.error.bind(obs)
      return ws.close.bind(ws)
    })

    let observer = {
      next: (data: Object) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data))
        }
        else {
          setTimeout(() => {
            ws.send(JSON.stringify(data))
          }, 1000)
        }
      }
    }
    let subject = new Subject()
    return Subject.create(observer, observable)
  }
}
