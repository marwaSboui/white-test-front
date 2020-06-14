import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamRoomUpdateComponent } from './exam-room-update.component';

describe('ExamRoomUpdateComponent', () => {
  let component: ExamRoomUpdateComponent;
  let fixture: ComponentFixture<ExamRoomUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamRoomUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamRoomUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
