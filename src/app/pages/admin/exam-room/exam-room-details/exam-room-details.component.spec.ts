import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamRoomDetailsComponent } from './exam-room-details.component';

describe('ExamRoomDetailsComponent', () => {
  let component: ExamRoomDetailsComponent;
  let fixture: ComponentFixture<ExamRoomDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamRoomDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamRoomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
