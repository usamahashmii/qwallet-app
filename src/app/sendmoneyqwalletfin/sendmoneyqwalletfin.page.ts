import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sendmoneyqwalletfin',
  templateUrl: './sendmoneyqwalletfin.page.html',
  styleUrls: ['./sendmoneyqwalletfin.page.scss'],
})
export class SendmoneyqwalletfinPage implements OnInit {

  sendMoneyType: string = '';
  sendTypeIcon: string = '';
  constructor(private route: ActivatedRoute,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.sendMoneyType = params.navigationparams;
      console.log(this.sendMoneyType);
      if(this.sendMoneyType == 'qwallet-transfer'){
        this.sendTypeIcon = 'assets/imgs/Q iCON.png';
      }else if(this.sendMoneyType == 'cnic-transfer'){
        this.sendTypeIcon = 'assets/imgs/001-membership.svg';
      }else if(this.sendMoneyType == 'bank-transfer'){
        this.sendTypeIcon = 'assets/imgs/002-bank.svg';
      }
    });
  }
  transactionDetails(){
    this.navCtrl.navigateRoot('/transactiondetail');
  }
}
