import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendmoneycnicPage } from './sendmoneycnic.page';

const routes: Routes = [
  {
    path: '',
    component: SendmoneycnicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendmoneycnicPageRoutingModule {}
