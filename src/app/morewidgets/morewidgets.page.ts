import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-morewidgets',
  templateUrl: './morewidgets.page.html',
  styleUrls: ['./morewidgets.page.scss'],
})
export class MorewidgetsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  openCategory(val){
    switch(val){
      case 'load-bundle': 
        this.navCtrl.navigateForward('/qload');
        break;
      case 'wallet-cnic-bank':
        this.navCtrl.navigateForward('sendmoney');
        break;
      case 'donation': 
        this.navCtrl.navigateForward('/donation');
        break;
      case 'credit-card':
        this.navCtrl.navigateForward('/cards');
        break;
      case 'bill-payments':
        this.navCtrl.navigateForward('/electric');
        break;
    }
  }
}
