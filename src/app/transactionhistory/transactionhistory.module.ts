import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionhistoryPageRoutingModule } from './transactionhistory-routing.module';

import { TransactionhistoryPage } from './transactionhistory.page';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material/material.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionhistoryPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [TransactionhistoryPage]
})
export class TransactionhistoryPageModule {}
