import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendmoneyqwalletfinPage } from './sendmoneyqwalletfin.page';

const routes: Routes = [
  {
    path: '',
    component: SendmoneyqwalletfinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendmoneyqwalletfinPageRoutingModule {}
