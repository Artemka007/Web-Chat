import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private _http: HttpClient) {
  }

  private _getCookie(name: string) {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;
    for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }

  public getRequest<T>(url: string) {
    return this._http.get<T>(url, {
      headers: {
        'X-CSRFToken': this._getCookie('csrftoken'),
      }
    })
  }

  public postRequest<T>(url: string, data: object) {
    return this._http.post<T>(url, data, {
      headers: {
        'X-CSRFToken': this._getCookie('csrftoken'),
      }
    })
  }

  public putRequest<T>(url: string, data?: object) {
    return this._http.put<T>(url, data, {
      headers: {
        'X-CSRFToken': this._getCookie('csrftoken'),
      }
    })
  }

  public deleteRequest<T>(url: string) {
    return this._http.delete<T>(url, {
      headers: {
        'X-CSRFToken': this._getCookie('csrftoken'),
      }
    })
  }
}
