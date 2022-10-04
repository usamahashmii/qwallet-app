import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sendmoneybank',
  templateUrl: './sendmoneybank.page.html',
  styleUrls: ['./sendmoneybank.page.scss'],
})
export class SendmoneybankPage implements OnInit {

  banksArray = [
    {
      id: 1,
      name: "HBL"
    },
    {
      id: 2,
      name: "UBL"
    },
    {
      id: 3,
      name: "Al Habib Bank"
    },
    {
      id: 4,
      name: "Faisal Bank"
    },
    {
      id: 5,
      name: "Islamic Bank"
    },
    {
      id: 6,
      name: "Meezan Bank"
    }
  ];
  openBankDivBool: boolean = false;
  selectedBank: string = 'Select Bank';
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
  selectBank(){
    if(this.openBankDivBool){
      this.openBankDivBool = false;
    }else{
      this.openBankDivBool = true;
    }
  }
  bankSelected(value: any){
    this.openBankDivBool = false;
    this.selectedBank = value.name;
  }
  goToQWalletFin(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        navigationparams: 'bank-transfer'
      }
    };
    this.navCtrl.navigateForward('/sendmoneyqwalletfin' , navigationExtras);
  }
}
