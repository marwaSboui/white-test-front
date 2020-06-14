import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ExamListComponent} from './exam/exam-list/exam-list.component';
import {ExamDetailsComponent} from './exam/exam-details/exam-details.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
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
export class SupervisorRoutingModule { }

export const routedComponents = [
  DashboardComponent,
  ExamListComponent,
  ExamDetailsComponent,
];
