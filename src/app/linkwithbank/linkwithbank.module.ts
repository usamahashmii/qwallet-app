import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LinkwithbankPageRoutingModule } from './linkwithbank-routing.module';

import { LinkwithbankPage } from './linkwithbank.page';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LinkwithbankPageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [LinkwithbankPage]
})
export class LinkwithbankPageModule {}
