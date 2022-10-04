import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfiletabPageRoutingModule } from './profiletab-routing.module';

import { ProfiletabPage } from './profiletab.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfiletabPageRoutingModule,
    TranslateModule
  ],
  declarations: [ProfiletabPage]
})
export class ProfiletabPageModule {}
