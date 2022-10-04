import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-accountinfo',
  templateUrl: './accountinfo.page.html',
  styleUrls: ['./accountinfo.page.scss'],
})
export class AccountinfoPage implements OnInit {

  coinsDailyRange: number = 1000;
  coinsMonthlyRange: number = 5000;
  coinsYearlyRange: number = 2500;

  coinsDailyReceivingRange: number = 1000;
  coinsMonthlyReceivingRange: number = 5000;
  coinsYearlyReceivingRange: number = 2500;
  constructor(private navCtrl: NavController) { }
  ngOnInit() {
  }

  //Ranges
  qCoinsRange(val , ev: any){
    switch (val) {
      case 'dailySending':
        this.coinsDailyRange = ev.detail.value;
        break;
      case'monthlySending':
        this.coinsMonthlyRange = ev.detail.value;
        break;
      case 'yearlySending':
        this.coinsYearlyRange = ev.detail.value;
        break;
      case 'dailyReceiving':
        this.coinsDailyReceivingRange = ev.detail.value;
        break;
      case'monthlyReceiving':
        this.coinsMonthlyReceivingRange = ev.detail.value;
        break;
      case 'yearlyReceiving':
        this.coinsYearlyReceivingRange = ev.detail.value;
        break;
      default:
        //
    }
  }
  openProfile(){
    this.navCtrl.navigateForward('/profile');
  }
  saveChanges(){
    this.navCtrl.back();
  }
}
