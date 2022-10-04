import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AskusPageRoutingModule } from './askus-routing.module';

import { AskusPage } from './askus.page';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AskusPageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [AskusPage]
})
export class AskusPageModule {}
