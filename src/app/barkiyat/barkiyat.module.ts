import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarkiyatPageRoutingModule } from './barkiyat-routing.module';

import { BarkiyatPage } from './barkiyat.page';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarkiyatPageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [BarkiyatPage]
})
export class BarkiyatPageModule {}
