import {IUser} from "./account.model";

export interface IMessage {
  readonly id?: number
  user: number
  chat: number
  body: string
  audio_message?: { id: number, audio: string }
  reply_message?: Array<IMessage>
  reply_to_message?: IMessage
  readonly date?: string
  readonly was_read?: boolean
  is_remove?: boolean | null
}

export interface IMessageCreate {
  readonly id?: number
  user: number
  chat: number
  body: string
  audio_message?: number
  reply_message?: Array<IMessage>
  reply_to_message?: IMessage
  date?: string
  readonly was_read?: boolean
  is_remove?: boolean | null
}

export interface IChat {
  readonly id: number
  readonly users: Array<IUser>
  chat_messages: Array<IMessage>
  readonly is_group: boolean
}
