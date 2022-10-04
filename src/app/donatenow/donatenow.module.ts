import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonatenowPageRoutingModule } from './donatenow-routing.module';

import { DonatenowPage } from './donatenow.page';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonatenowPageRoutingModule,
    TranslateModule,
    ComponentsModule
  ],
  declarations: [DonatenowPage]
})
export class DonatenowPageModule {}
