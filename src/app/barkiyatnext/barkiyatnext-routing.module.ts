import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarkiyatnextPage } from './barkiyatnext.page';

const routes: Routes = [
  {
    path: '',
    component: BarkiyatnextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarkiyatnextPageRoutingModule {}
