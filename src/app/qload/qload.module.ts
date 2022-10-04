import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QloadPageRoutingModule } from './qload-routing.module';

import { QloadPage } from './qload.page';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QloadPageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [QloadPage]
})
export class QloadPageModule {}
