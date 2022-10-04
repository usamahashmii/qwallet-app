import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiftstransactionPageRoutingModule } from './giftstransaction-routing.module';

import { GiftstransactionPage } from './giftstransaction.page';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiftstransactionPageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [GiftstransactionPage]
})
export class GiftstransactionPageModule {}
