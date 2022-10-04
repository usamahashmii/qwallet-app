import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-shortcuts',
  templateUrl: './shortcuts.page.html',
  styleUrls: ['./shortcuts.page.scss'],
})
export class ShortcutsPage implements OnInit {

  categoryWidgetsArray = [];
  categoryAllWidgetsArray = [];
  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.categoryWidgetsArray = this.settingsService.categoryWidgetsArray;
    this.categoryAllWidgetsArray = this.settingsService.categoryAllWidgetsArray;
  }
  //remove Widgets
  removeCategory(obj){
    var index = this.categoryWidgetsArray.indexOf(obj);
    if(index > -1){
      this.categoryWidgetsArray.splice(index, 1);
    }
  }
  //Add widgets
  addCategory(obj){
    var index = this.categoryWidgetsArray.indexOf(obj);
    if(this.categoryWidgetsArray.length < 6){
      this.categoryWidgetsArray.push(obj);
    }
    
  }
}
