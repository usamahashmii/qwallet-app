import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonationtransactionPageRoutingModule } from './donationtransaction-routing.module';

import { DonationtransactionPage } from './donationtransaction.page';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonationtransactionPageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [DonationtransactionPage]
})
export class DonationtransactionPageModule {}
