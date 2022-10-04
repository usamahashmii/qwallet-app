import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectricPageRoutingModule } from './electric-routing.module';

import { ElectricPage } from './electric.page';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectricPageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [ElectricPage]
})
export class ElectricPageModule {}
