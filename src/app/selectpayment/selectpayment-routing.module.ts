import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectpaymentPage } from './selectpayment.page';

const routes: Routes = [
  {
    path: '',
    component: SelectpaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectpaymentPageRoutingModule {}
