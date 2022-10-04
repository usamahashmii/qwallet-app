import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonationPageRoutingModule } from './donation-routing.module';

import { DonationPage } from './donation.page';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonationPageRoutingModule,
    TranslateModule,
    ComponentsModule
  ],
  declarations: [DonationPage]
})
export class DonationPageModule {}
