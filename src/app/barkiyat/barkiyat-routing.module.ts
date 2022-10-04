import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarkiyatPage } from './barkiyat.page';

const routes: Routes = [
  {
    path: '',
    component: BarkiyatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarkiyatPageRoutingModule {}
