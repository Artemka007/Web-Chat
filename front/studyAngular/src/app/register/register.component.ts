import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = ""
  email = ""
  first_name = ""
  last_name = ""
  password1 = ""
  password2 = ""

  errors?: any

  isLoading = false

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
  }

  submit(registerForm: NgForm) {
    this.isLoading = true
    this._userService.registerUser(registerForm.form.value).subscribe(data => {
      this.isLoading = false
      if (data.result) this._router.navigate(['login'])
      else this.errors = data.errors
    })
  }

}
