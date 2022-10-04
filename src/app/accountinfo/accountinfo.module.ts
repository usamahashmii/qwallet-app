import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountinfoPageRoutingModule } from './accountinfo-routing.module';

import { AccountinfoPage } from './accountinfo.page';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountinfoPageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [AccountinfoPage]
})
export class AccountinfoPageModule {}
