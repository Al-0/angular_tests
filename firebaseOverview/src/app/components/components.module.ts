import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HorizontalLineChartComponent } from './horizontal-line-chart/horizontal-line-chart.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HorizontalLineChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  exports: [
    NavbarComponent,
    HorizontalLineChartComponent
  ]
})
export class ComponentsModule { }
