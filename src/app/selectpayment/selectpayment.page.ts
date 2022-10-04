import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-selectpayment',
  templateUrl: './selectpayment.page.html',
  styleUrls: ['./selectpayment.page.scss'],
})
export class SelectpaymentPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  openCategory(val){
    switch(val){
      case 'electricity':
        this.navCtrl.navigateForward('/electric');
        break;
      case 'credit-card':
        this.navCtrl.navigateForward('/cards');
        break;
      default: 
        break;
    }
  }
}
