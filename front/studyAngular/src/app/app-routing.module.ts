import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PostsComponent} from "./posts/posts.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ChatComponent} from "./chat/chat.component";
import {AllChatsComponent} from "./all-chats/all-chats.component";

const routes: Routes = [
  {path: 'posts', component: PostsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'all_chats', component: AllChatsComponent},
  {path: 'chat', component: ChatComponent},
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  imports:[
    RouterModule.forRoot(routes, {enableTracing: true}),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}
