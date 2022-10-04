import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarkiyatnextPageRoutingModule } from './barkiyatnext-routing.module';

import { BarkiyatnextPage } from './barkiyatnext.page';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarkiyatnextPageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [BarkiyatnextPage]
})
export class BarkiyatnextPageModule {}
