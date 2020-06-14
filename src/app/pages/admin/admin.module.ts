import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { AdminRoutingModule, routedComponents } from './admin-routing.module';

const components = [
];

@NgModule({
  imports: [
    ThemeModule,
    AdminRoutingModule,
  ],
  declarations: [...routedComponents, ...components],
})
export class AdminModule {}
