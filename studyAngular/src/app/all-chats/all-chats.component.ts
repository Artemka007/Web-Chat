import { Component, OnInit } from '@angular/core';
import {ChatService} from "../services/chat.service";
import {IChat} from "../models/chat.model";
import {IUser} from "../models/account.model";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-all-chats',
  templateUrl: './all-chats.component.html',
  styleUrls: ['./all-chats.component.css']
})
export class AllChatsComponent implements OnInit {

  user: IUser | null = null
  chats: IChat[] = []

  constructor(private _chatService: ChatService, private _userService: UserService) {}

  ngOnInit(): void {
    this._chatService.getAllChats().subscribe(data => {
      this.chats = data.chats
    })

    this._userService.getAuthUser().subscribe(data => {
      this.user = data.user
    })
  }

}
