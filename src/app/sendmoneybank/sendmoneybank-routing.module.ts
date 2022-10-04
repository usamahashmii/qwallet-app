import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendmoneybankPage } from './sendmoneybank.page';

const routes: Routes = [
  {
    path: '',
    component: SendmoneybankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendmoneybankPageRoutingModule {}
