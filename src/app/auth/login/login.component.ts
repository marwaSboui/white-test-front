import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.authenticationService
      .login(this.loginForm.get(['username']).value, this.loginForm.get(['password']).value)
      .subscribe(res => {
      console.log(res);
    });
  }

  private initLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required, Validators.email],
      password: [null, [Validators.required]],
    });
  }
}
