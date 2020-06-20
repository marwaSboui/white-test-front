import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import {NbToastrService} from '@nebular/theme';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private toastrService: NbToastrService) { }

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
    const user: User = {
      username: this.registerForm.get(['username']).value,
      password: this.registerForm.get(['password']).value,
      firstName: this.registerForm.get(['firstName']).value,
      lastName: this.registerForm.get(['lastName']).value,
    };
    this.userService.createStudent(user).subscribe(res => {
      if (res) {
        this.toastrService.success('Success register', 'Register');
        this.router.navigate(['login']);
      }
    }, error => {
      this.toastrService.danger('Error while register', 'Register', {});
    });
  }

  checkPasswords(group: FormGroup) {
    const pass = group.get('password').value;
    const confirmPass = group.get('repeatedPassword').value;
    return pass === confirmPass ? null : {notSame: true};
  }

}
