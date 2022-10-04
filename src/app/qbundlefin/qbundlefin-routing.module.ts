import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QbundlefinPage } from './qbundlefin.page';

const routes: Routes = [
  {
    path: '',
    component: QbundlefinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QbundlefinPageRoutingModule {}
