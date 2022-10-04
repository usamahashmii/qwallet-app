import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscountsPageRoutingModule } from './discounts-routing.module';

import { DiscountsPage } from './discounts.page';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscountsPageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [DiscountsPage]
})
export class DiscountsPageModule {}
