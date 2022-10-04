import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromotionPageRoutingModule } from './promotion-routing.module';

import { PromotionPage } from './promotion.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromotionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PromotionPage]
})
export class PromotionPageModule {}
