import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UserService} from "../services/user.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import '@angular/localize/init'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string | null = null
  password: string | null = null

  isLoading: boolean = false

  errors?: any

  constructor(private _userService: UserService, private _router: Router) {
  }

  ngOnInit() {
  }

  submit(loginForm: NgForm): void {
    if (this.username && this.password) {
      this.isLoading = true
      this._userService.loginUser(loginForm.form.value).subscribe(data => {
        this.errors = data.errors
        console.log(data.errors)
        this.isLoading = false
        if (data.result) {
          this._userService.getAuthUser().subscribe(data => {
            if(data.user) this._router.navigate(['posts'], {queryParams: {'user': data.user.username}})
            else this.errors.__all__ = ['Something was wrong... Please, try again!']
          })
        }
      })
    }
  }

}
