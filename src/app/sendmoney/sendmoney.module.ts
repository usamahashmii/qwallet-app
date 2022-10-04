import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendmoneyPageRoutingModule } from './sendmoney-routing.module';

import { SendmoneyPage } from './sendmoney.page';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendmoneyPageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [SendmoneyPage]
})
export class SendmoneyPageModule {}
