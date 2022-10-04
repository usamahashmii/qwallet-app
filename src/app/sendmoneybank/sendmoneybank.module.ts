import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendmoneybankPageRoutingModule } from './sendmoneybank-routing.module';

import { SendmoneybankPage } from './sendmoneybank.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendmoneybankPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SendmoneybankPage]
})
export class SendmoneybankPageModule {}
