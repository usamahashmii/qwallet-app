import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QloadnextPage } from './qloadnext.page';

const routes: Routes = [
  {
    path: '',
    component: QloadnextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QloadnextPageRoutingModule {}
