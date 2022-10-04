import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangepinPageRoutingModule } from './changepin-routing.module';

import { ChangepinPage } from './changepin.page';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangepinPageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [ChangepinPage]
})
export class ChangepinPageModule {}
