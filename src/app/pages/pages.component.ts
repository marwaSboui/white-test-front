import { Component } from '@angular/core';

import {getMenuItems} from './pages-menu';
import {AuthenticationService} from '../service/authentication.service';
import {User} from '../models/user';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  constructor(private authenticationService: AuthenticationService) {
    this.setMenu();
  }
  menu;

  private setMenu() {
   const user: User = this.authenticationService
     .getDecodedAccessToken(this.authenticationService.currentUserValue.token);
   switch (user.role) {
     case 'STUDENT': this.menu = getMenuItems('STUDENT'); break;
     case 'SUPERVISOR': this.menu = getMenuItems('SUPERVISOR'); break;
     case 'ADMIN': this.menu = getMenuItems('ADMIN'); break;
   }

  }
}
