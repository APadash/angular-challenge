import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanRoutingModule } from './plan-routing.module';
import { PlanComponent } from './plan.component';
import { SeatComponent } from './seat/seat.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PlanComponent,
    SeatComponent
  ],
  imports: [
    CommonModule,
    PlanRoutingModule,
    RouterModule
  ]
})
export class PlanModule { }
