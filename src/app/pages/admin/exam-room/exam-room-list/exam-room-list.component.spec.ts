import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamRoomListComponent } from './exam-room-list.component';

describe('ExamRoomListComponent', () => {
  let component: ExamRoomListComponent;
  let fixture: ComponentFixture<ExamRoomListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamRoomListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamRoomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
