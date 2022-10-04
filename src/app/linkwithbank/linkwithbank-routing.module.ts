import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinkwithbankPage } from './linkwithbank.page';

const routes: Routes = [
  {
    path: '',
    component: LinkwithbankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinkwithbankPageRoutingModule {}
