import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CertificationListComponent} from './certification/certification-list/certification-list.component';
import {CertificationDetailsComponent} from './certification/certification-details/certification-details.component';
import {ExamListComponent} from './exam/exam-list/exam-list.component';
import {ExamDetailsComponent} from './exam/exam-details/exam-details.component';

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
    path: 'certification/:id',
    component: CertificationDetailsComponent,
  },
  {
    path: 'exam',
    component: ExamListComponent,
  },
  {
    path: 'exam/:id',
    component: ExamDetailsComponent,
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
export class StudentRoutingModule { }

export const routedComponents = [
  CertificationListComponent,
  CertificationDetailsComponent,
  ExamListComponent,
  ExamDetailsComponent,
  DashboardComponent,
];
