import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../service/user.service';
import {Router} from '@angular/router';
import {NbToastrService} from '@nebular/theme';
import {User} from '../../../../models/user';

@Component({
  selector: 'ngx-supervisor-add',
  templateUrl: './supervisor-add.component.html',
  styleUrls: ['./supervisor-add.component.scss'],
})
export class SupervisorAddComponent implements OnInit {
  createSupervisorForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  private createRegisterForm() {
    this.createSupervisorForm = this.formBuilder.group({
      username: [null, Validators.required, Validators.email],
      password: [null, Validators.required],
      repeatedPassword: [null, Validators.required],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
    }, {validator: this.checkPasswords});
  }

  onSubmit() {
    if (this.createSupervisorForm.invalid) {
      return;
    }
    const user: User = {
      username: this.createSupervisorForm.get(['username']).value,
      password: this.createSupervisorForm.get(['password']).value,
      firstName: this.createSupervisorForm.get(['firstName']).value,
      lastName: this.createSupervisorForm.get(['lastName']).value,
    };
    this.userService.createSupervisor(user).subscribe(res => {
      if (res) {
        this.toastrService.success('Success register', 'Register');
        this.router.navigate(['/pages/admin/supervisor']);
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
