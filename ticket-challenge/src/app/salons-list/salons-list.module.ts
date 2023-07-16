import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalonsListRoutingModule } from './salons-list-routing.module';
import { SalonsListComponent } from './salons-list.component';


@NgModule({
  declarations: [
    SalonsListComponent
  ],
  imports: [
    CommonModule,
    SalonsListRoutingModule
  ]
})
export class SalonsListModule { }
