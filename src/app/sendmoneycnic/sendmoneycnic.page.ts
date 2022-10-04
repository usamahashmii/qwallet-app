import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sendmoneycnic',
  templateUrl: './sendmoneycnic.page.html',
  styleUrls: ['./sendmoneycnic.page.scss'],
})
export class SendmoneycnicPage implements OnInit {

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
  goToQWalletFin(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        navigationparams: 'cnic-transfer'
      }
    };
    this.navCtrl.navigateForward('/sendmoneyqwalletfin' , navigationExtras);
  }
}
