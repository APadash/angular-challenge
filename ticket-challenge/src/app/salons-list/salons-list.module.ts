import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalonsListRoutingModule } from './salons-list-routing.module';
import { SalonsListComponent } from './salons-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SalonsListComponent
  ],
  imports: [
    CommonModule,
    SalonsListRoutingModule,
    RouterModule
  ]
})
export class SalonsListModule { }
