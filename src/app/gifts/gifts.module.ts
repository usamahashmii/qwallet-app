import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiftsPageRoutingModule } from './gifts-routing.module';

import { GiftsPage } from './gifts.page';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiftsPageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [GiftsPage]
})
export class GiftsPageModule {}
