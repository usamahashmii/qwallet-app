import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShortcutsPageRoutingModule } from './shortcuts-routing.module';

import { ShortcutsPage } from './shortcuts.page';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShortcutsPageRoutingModule,
    TranslateModule,
    ComponentsModule
  ],
  declarations: [ShortcutsPage]
})
export class ShortcutsPageModule {}
