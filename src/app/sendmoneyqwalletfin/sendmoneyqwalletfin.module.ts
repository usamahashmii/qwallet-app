import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendmoneyqwalletfinPageRoutingModule } from './sendmoneyqwalletfin-routing.module';

import { SendmoneyqwalletfinPage } from './sendmoneyqwalletfin.page';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendmoneyqwalletfinPageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [SendmoneyqwalletfinPage]
})
export class SendmoneyqwalletfinPageModule {}
