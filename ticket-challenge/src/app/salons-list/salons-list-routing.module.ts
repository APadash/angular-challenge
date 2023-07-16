import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalonsListComponent } from './salons-list.component';

const routes: Routes = [
  { path: '', component: SalonsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalonsListRoutingModule { }
