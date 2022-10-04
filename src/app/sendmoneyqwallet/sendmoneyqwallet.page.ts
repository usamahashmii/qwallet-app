import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sendmoneyqwallet',
  templateUrl: './sendmoneyqwallet.page.html',
  styleUrls: ['./sendmoneyqwallet.page.scss'],
})
export class SendmoneyqwalletPage implements OnInit {

  charCount: number = 0;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  messageChangeTxt(event: any){
    console.log(event);
    var char = event.detail.value;
    var charLength = char.length;
    if(charLength < 126){
      this.charCount = charLength;
    }else{
      this.charCount = -charLength;
    }
  }
  //visit page QWallet Fin
  goToQWalletFin(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        navigationparams: 'qwallet-transfer'
      }
    };
    this.navCtrl.navigateForward('/sendmoneyqwalletfin' , navigationExtras);
  }
}
