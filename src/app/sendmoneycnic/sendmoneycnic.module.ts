import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendmoneycnicPageRoutingModule } from './sendmoneycnic-routing.module';

import { SendmoneycnicPage } from './sendmoneycnic.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendmoneycnicPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SendmoneycnicPage]
})
export class SendmoneycnicPageModule {}
