import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import {HttpClientModule} from "@angular/common/http";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import { LoaderComponent } from './loader/loader.component';
import { RegisterComponent } from './register/register.component';
import { ChatComponent } from './chat/chat.component';
import {Subject} from "rxjs";
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { DeleteMessageContentComponent } from './delete-message-content/delete-message-content.component';
import { AllChatsComponent } from './all-chats/all-chats.component';
import {NgAudioRecorderModule} from "ng-audio-recorder";
import { AudioMessageComponent } from './audio-message/audio-message.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { CallComponent } from './call/call.component';
import { ChangeCallVolumeComponent } from './change-call-volume/change-call-volume.component';
import { ChooseVideoEffectsComponent } from './choose-video-effects/choose-video-effects.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PageNotFoundComponent,
    LoginComponent,
    LoaderComponent,
    RegisterComponent,
    ChatComponent,
    ModalWindowComponent,
    DeleteMessageContentComponent,
    AllChatsComponent,
    AudioMessageComponent,
    UploadFilesComponent,
    CallComponent,
    ChangeCallVolumeComponent,
    ChooseVideoEffectsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgAudioRecorderModule,
  ],
  providers: [
    Subject
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
