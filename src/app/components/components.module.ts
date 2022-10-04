import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsmenuComponent } from '../appsmenu/appsmenu.component';
import { HeaderComponent } from '../header/header.component';
import { TabsheaderComponent } from '../tabsheader/tabsheader.component';
import { AskdropdownComponent } from '../askdropdown/askdropdown.component';



@NgModule({
  exports: [AppsmenuComponent,HeaderComponent,TabsheaderComponent,AskdropdownComponent],
  declarations: [AppsmenuComponent,HeaderComponent,TabsheaderComponent,AskdropdownComponent],
  imports: [
    CommonModule
  ],
})
export class ComponentsModule { }
