import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CertificationListComponent} from './certification/certification-list/certification-list.component';
import {CertificationAddComponent} from './certification/certification-add/certification-add.component';
import {CertificationUpdateComponent} from './certification/certification-update/certification-update.component';
import {CertificationDetailsComponent} from './certification/certification-details/certification-details.component';
import {SupervisorAddComponent} from './supervisor/supervisor-add/supervisor-add.component';
import {ExamRoomListComponent} from './exam-room/exam-room-list/exam-room-list.component';
import {SupervisorListComponent} from './supervisor/supervisor-list/supervisor-list.component';
import {ExamRoomUpdateComponent} from './exam-room/exam-room-update/exam-room-update.component';
import {ExamRoomDetailsComponent} from './exam-room/exam-room-details/exam-room-details.component';
import {ExamRoomAddComponent} from './exam-room/exam-room-add/exam-room-add.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'certification',
    component: CertificationListComponent,
  },
  {
    path: 'certification/add',
    component: CertificationAddComponent,
  },
  {
    path: 'certification/:id',
    component: CertificationDetailsComponent,
  },
  {
    path: 'certification/update/:id',
    component: CertificationUpdateComponent,
  },
  {
    path: 'exam-room',
    component: ExamRoomListComponent,
  },

  {
    path: 'exam-room/:id',
    component: ExamRoomDetailsComponent,
  },
  {
    path: 'exam-room/add',
    component: ExamRoomAddComponent,
  },
  {
    path: 'exam-room/update/:id',
    component: ExamRoomUpdateComponent,
  },
  {
    path: 'supervisor',
    component: SupervisorListComponent,
  },
  {
    path: 'supervisor/add',
    component: SupervisorAddComponent,
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }

export const routedComponents = [
  DashboardComponent,
  CertificationListComponent,
  CertificationAddComponent,
  CertificationUpdateComponent,
  CertificationDetailsComponent,
  SupervisorAddComponent,
  ExamRoomListComponent,
  SupervisorListComponent,
  ExamRoomUpdateComponent,
  ExamRoomDetailsComponent,
  ExamRoomAddComponent,
];
