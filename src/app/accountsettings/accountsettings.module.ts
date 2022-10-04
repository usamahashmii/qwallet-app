import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountsettingsPageRoutingModule } from './accountsettings-routing.module';

import { AccountsettingsPage } from './accountsettings.page';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material/material.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountsettingsPageRoutingModule,
    ComponentsModule,
    TranslateModule,
    MaterialModule
  ],
  declarations: [AccountsettingsPage]
})
export class AccountsettingsPageModule {}
