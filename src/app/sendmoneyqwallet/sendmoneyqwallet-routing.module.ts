import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendmoneyqwalletPage } from './sendmoneyqwallet.page';

const routes: Routes = [
  {
    path: '',
    component: SendmoneyqwalletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendmoneyqwalletPageRoutingModule {}
