import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectpaymentPageRoutingModule } from './selectpayment-routing.module';

import { SelectpaymentPage } from './selectpayment.page';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectpaymentPageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [SelectpaymentPage]
})
export class SelectpaymentPageModule {}
