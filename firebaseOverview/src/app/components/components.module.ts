import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

import { HorizontalLineChartComponent } from './horizontal-line-chart/horizontal-line-chart.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HorizontalLineChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    HorizontalLineChartComponent
  ]
})
export class ComponentsModule { }
