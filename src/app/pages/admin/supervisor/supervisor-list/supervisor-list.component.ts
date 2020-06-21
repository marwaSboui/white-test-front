import { Component, OnInit } from '@angular/core';
import {User} from '../../../../models/user';
import {Router} from '@angular/router';
import {UserService} from '../../../../service/user.service';

@Component({
  selector: 'ngx-supervisor-list',
  templateUrl: './supervisor-list.component.html',
  styleUrls: ['./supervisor-list.component.scss'],
})
export class SupervisorListComponent implements OnInit {
  supervisorList: User[];
  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
    this.findAllSupervisor();
  }

  onAdd() {
    this.router.navigate(['pages/admin/supervisor/add']);
  }

  private findAllSupervisor() {
    this.userService.findSupervisor().subscribe(res => {
      this.supervisorList = res;
    });
  }
}
