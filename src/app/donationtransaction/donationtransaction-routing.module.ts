import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonationtransactionPage } from './donationtransaction.page';

const routes: Routes = [
  {
    path: '',
    component: DonationtransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonationtransactionPageRoutingModule {}
