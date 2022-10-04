import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  favoritesArray: any = [];
  colorArray = [];
  constructor(private route: ActivatedRoute,
    private navCtrl: NavController,
    private settingsService: SettingsService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.colorArray = this.settingsService.colorArray;
      this.favoritesArray = params.navigationparams;
      this.favoritesArray = JSON.parse(this.favoritesArray);
      console.log(this.favoritesArray);
    });
  }
  getFirstChar(name: string){
    if(name.includes(' ')){
      return name.charAt(0) + name.split(' ')[1].charAt(0);
    }else{
      return name.charAt(0);
    }
    
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
  openSendMoney(){
    this.navCtrl.navigateForward('/sendmoney');
  }
}
