import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ExamRoom} from '../../../../models/exam-room';
import {ExamRoomService} from '../../../../service/exam-room.service';

@Component({
  selector: 'ngx-exam-room-list',
  templateUrl: './exam-room-list.component.html',
  styleUrls: ['./exam-room-list.component.scss'],
})
export class ExamRoomListComponent implements OnInit {
  examRoomList: ExamRoom[];
  constructor(private router: Router,
              private examRoomService: ExamRoomService) { }

  ngOnInit(): void {
    this.findAllExamRoom();
  }

  onAdd() {
    this.router.navigate(['pages/admin/exam-room/add']);
  }

  private findAllExamRoom() {
    this.examRoomService.findAll().subscribe(res => {
      this.examRoomList = res;
    });
  }

  onClickDetails(_id: string) {
    this.router.navigate(['pages/admin/exam-room/' + _id]);
  }

  onClickUpdate(_id: string) {
    this.router.navigate(['pages/admin/exam-room/update/' + _id ]);
  }

  onClickDelete(_id: string) {
    this.examRoomService.delete(_id).subscribe(res => {
      this.findAllExamRoom();
    });
  }
}
