import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QbundlefinPageRoutingModule } from './qbundlefin-routing.module';

import { QbundlefinPage } from './qbundlefin.page';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QbundlefinPageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [QbundlefinPage]
})
export class QbundlefinPageModule {}
