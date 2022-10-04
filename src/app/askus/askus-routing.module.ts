import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AskusPage } from './askus.page';

const routes: Routes = [
  {
    path: '',
    component: AskusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AskusPageRoutingModule {}
