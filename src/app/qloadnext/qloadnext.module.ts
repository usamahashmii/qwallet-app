import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QloadnextPageRoutingModule } from './qloadnext-routing.module';

import { QloadnextPage } from './qloadnext.page';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material/material.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QloadnextPageRoutingModule,
    ComponentsModule,
    MaterialModule,
    TranslateModule
  ],
  declarations: [QloadnextPage]
})
export class QloadnextPageModule {}
