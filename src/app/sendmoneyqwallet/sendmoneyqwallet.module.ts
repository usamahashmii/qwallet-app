import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendmoneyqwalletPageRoutingModule } from './sendmoneyqwallet-routing.module';

import { SendmoneyqwalletPage } from './sendmoneyqwallet.page';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendmoneyqwalletPageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [SendmoneyqwalletPage]
})
export class SendmoneyqwalletPageModule {}
