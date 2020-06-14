import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamRoomAddComponent } from './exam-room-add.component';

describe('ExamRoomAddComponent', () => {
  let component: ExamRoomAddComponent;
  let fixture: ComponentFixture<ExamRoomAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamRoomAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamRoomAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
