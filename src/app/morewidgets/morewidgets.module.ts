import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MorewidgetsPageRoutingModule } from './morewidgets-routing.module';

import { MorewidgetsPage } from './morewidgets.page';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MorewidgetsPageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [MorewidgetsPage]
})
export class MorewidgetsPageModule {}
