import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import {SupervisorModule} from './supervisor/supervisor.module';
import {AdminModule} from './admin/admin.module';
import {StudentModule} from './student/student.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    SupervisorModule,
    AdminModule,
    StudentModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
