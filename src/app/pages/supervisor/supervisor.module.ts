import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';

import { SupervisorRoutingModule, routedComponents } from './supervisor-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExamListComponent } from './exam/exam-list/exam-list.component';
import { ExamDetailsComponent } from './exam/exam-details/exam-details.component';

const components = [
];

@NgModule({
  imports: [
    ThemeModule,
    SupervisorRoutingModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartModule,
    NbCardModule,
  ],
  declarations: [...routedComponents, ...components],
})
export class SupervisorModule {}
