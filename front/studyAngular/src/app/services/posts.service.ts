import { Injectable } from '@angular/core';
import {IPost} from "../posts/posts";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {baseURI} from "../models/api.model";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: IPost[] = []


  constructor(private http: HttpClient) { }

  getPosts(): Observable<{ posts: IPost[] }> {
    return this.http.get<{ posts: IPost[] }>(baseURI + "post/", {})
  }
}
