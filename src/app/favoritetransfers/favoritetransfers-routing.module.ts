import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritetransfersPage } from './favoritetransfers.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritetransfersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritetransfersPageRoutingModule {}
