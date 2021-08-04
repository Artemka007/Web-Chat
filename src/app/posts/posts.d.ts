import {IUser} from "../models/account.model";

export interface IPost {
  id: number
  user: IUser
  body: string
  date: string
}
