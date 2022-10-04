import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-favoritetransfers',
  templateUrl: './favoritetransfers.page.html',
  styleUrls: ['./favoritetransfers.page.scss'],
})
export class FavoritetransfersPage implements OnInit {

  favoritesArray = [];
  colorArray = [];
  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.favoritesArray = this.settingsService.favoritesArray;
    this.colorArray = this.settingsService.colorArray;
  }
  getFirstChar(name: string){
    return name.charAt(0) + name.split(' ')[1].charAt(0);
  }
  getFirstName(name: string){
    return name.split(' ')[0];
  }
  getColor(index){
    if(index < this.colorArray.length){
      return this.colorArray[index];
    }else{
      return this.colorArray[index - this.colorArray.length];
    }
  }
}
