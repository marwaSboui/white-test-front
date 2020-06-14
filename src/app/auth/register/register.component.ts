import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  private createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      username: [null, Validators.required, Validators.email],
      password: [null, Validators.required],
      repeatedPassword: [null, Validators.required],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
    }, {validator: this.checkPasswords});
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

  }

  checkPasswords(group: FormGroup) {
    const pass = group.get('password').value;
    const confirmPass = group.get('repeatedPassword').value;
    return pass === confirmPass ? null : {notSame: true};
  }

}
