import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MorewidgetsPage } from './morewidgets.page';

const routes: Routes = [
  {
    path: '',
    component: MorewidgetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MorewidgetsPageRoutingModule {}
