import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../models/post.model";
import {PostsService} from "../services/posts.service";
import {Location, LocationStrategy, PathLocationStrategy} from "@angular/common";
import '@angular/localize/init'

@Component({
  selector: 'app-posts',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  isLoading: boolean = false

  constructor(
    private postsService: PostsService,
  ) { }

  posts: IPost[] = []

  ngOnInit(): void {
    this.isLoading = true
    this.postsService.getPosts().subscribe(data => {
      this.posts = data.posts
      this.isLoading = false
    })
  }

}
