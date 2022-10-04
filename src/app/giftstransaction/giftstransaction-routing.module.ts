import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiftstransactionPage } from './giftstransaction.page';

const routes: Routes = [
  {
    path: '',
    component: GiftstransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiftstransactionPageRoutingModule {}
