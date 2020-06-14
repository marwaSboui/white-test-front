import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { StudentRoutingModule, routedComponents } from './student-routing.module';
import { CertificationListComponent } from './certification/certification-list/certification-list.component';
import { CertificationDetailsComponent } from './certification/certification-details/certification-details.component';
import { ExamListComponent } from './exam/exam-list/exam-list.component';
import { ExamDetailsComponent } from './exam/exam-details/exam-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const components = [
];

@NgModule({
  imports: [
    ThemeModule,
    StudentRoutingModule,
  ],
  declarations: [...routedComponents, ...components],
})
export class StudentModule {}
