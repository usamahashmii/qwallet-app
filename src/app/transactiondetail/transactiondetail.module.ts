import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactiondetailPageRoutingModule } from './transactiondetail-routing.module';

import { TransactiondetailPage } from './transactiondetail.page';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactiondetailPageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [TransactiondetailPage]
})
export class TransactiondetailPageModule {}
