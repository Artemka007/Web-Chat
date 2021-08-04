import {Injectable} from '@angular/core';
import {IUser} from "../models/account.model";
import {Observable} from "rxjs";
import {baseURI, ILoginUser, IRegisterUser, IResponse} from "../models/api.model";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = baseURI + 'user/'

  constructor(private _api: ApiService) {
  }

  getAuthUser(): Observable<{ user: IUser | null }> {
    return this._api.getRequest<{ user: IUser | null }>(this.url)
  }

  registerUser(data: IRegisterUser): Observable<IResponse> {
    return this._api.postRequest<IResponse>(this.url, data)
  }

  loginUser(data: ILoginUser): Observable<IResponse> {
    return this._api.putRequest<IResponse>(this.url, data)
  }

  logoutUser(): Observable<IResponse> {
    return this._api.deleteRequest<IResponse>(this.url)
  }
}
