import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {UserService} from "./services/user.service";
import {IUser} from "./models/account.model";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ActivatedRoute, NavigationStart, Router} from "@angular/router";
import {ChatComponent} from "./chat/chat.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({transform: 'none'})),
      state('close', style({transform: 'scaleY(0)'})),
      transition('close <=> open', animate(100))
    ])
  ],
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked {
  constructor(private userService: UserService, private router: Router, private r: ActivatedRoute) {
    this.r.queryParams.subscribe(params => {
      let username = params['user']
      if (username) {
        this.userService.getAuthUser().subscribe(data => {
          this.user = data.user
        })
      }
    });
  }

  public user: IUser | null = null
  public isOpen = false

  ngOnInit() {
    this.userService.getAuthUser().subscribe(data => {
      this.user = data.user
      if (!data.user) this.router.navigateByUrl('/login')
      // else this.router.navigateByUrl('/posts')
    })

  }

  ngAfterViewInit() {

  }

  ngAfterViewChecked() {

  }

  ngAfterContentInit() {

  }

  ngAfterContentChecked() {

  }

  openOrClose(isOpen: boolean) {
    this.isOpen = isOpen
  }

  logout(ev: MouseEvent): void {
    this.userService.logoutUser().subscribe(data => {
      console.log(data.result)
    })
    this.userService.getAuthUser().subscribe(data => {
      this.user = data.user
    })
    this.router.navigateByUrl('login')
  }

}
