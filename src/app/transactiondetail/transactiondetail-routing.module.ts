import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactiondetailPage } from './transactiondetail.page';

const routes: Routes = [
  {
    path: '',
    component: TransactiondetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactiondetailPageRoutingModule {}
