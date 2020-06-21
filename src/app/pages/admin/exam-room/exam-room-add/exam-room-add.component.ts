import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Availability} from '../../../../models/availability';
import {ExamRoom} from '../../../../models/exam-room';
import {ExamRoomService} from '../../../../service/exam-room.service';

@Component({
  selector: 'ngx-exam-room-add',
  templateUrl: './exam-room-add.component.html',
  styleUrls: ['./exam-room-add.component.scss'],
})
export class ExamRoomAddComponent implements OnInit {

  addExamRoomForm: FormGroup;
  addAvailabilityForm: FormGroup;
  availabilityList: Availability[] = [];
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private examRoomService: ExamRoomService) { }


  ngOnInit(): void {
    this.initAddForm();
  }

  private initAddForm() {
    this.addExamRoomForm = this.formBuilder.group({
      number: [null, Validators.required],
    });
    this.addAvailabilityForm = this.formBuilder.group({
      from: [null, Validators.required],
      to: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.addExamRoomForm.invalid) {
      return;
    }
    const examRoom: ExamRoom = {
      number: this.addExamRoomForm.get(['number']).value,
      availability: this.availabilityList,
    };
    this.examRoomService.create(examRoom).subscribe(res => {
      if (res) {
        this.router.navigate(['pages/admin/exam-room']);
      }
    });
  }

  addAvailability() {
    if (this.addAvailabilityForm.invalid) {
      return;
    }

    this.availabilityList.push({
      from: this.addAvailabilityForm.controls.from.value,
      to: this.addAvailabilityForm.controls.to.value,
    });

    this.addAvailabilityForm.reset();
  }


  onDeleteAvailability(i: number) {
    if (i > -1) {
      this.availabilityList.splice(i, 1);
    }
  }
}
