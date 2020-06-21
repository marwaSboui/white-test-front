import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { AdminRoutingModule, routedComponents } from './admin-routing.module';
import {
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbLayoutModule,
    NbTooltipModule,
} from '@nebular/theme';
import {ReactiveFormsModule} from '@angular/forms';
import {NbAuthModule} from '@nebular/auth';

const components = [
];

@NgModule({
    imports: [
        ThemeModule,
        AdminRoutingModule,
        NbCardModule,
        NbButtonModule,
        NbIconModule,
        NbTooltipModule,
        ReactiveFormsModule,
        NbInputModule,
        NbAuthModule,
        NbLayoutModule,
    ],
  declarations: [...routedComponents, ...components],
})
export class AdminModule {}
