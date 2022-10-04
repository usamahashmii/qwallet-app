import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-linkwithbank',
  templateUrl: './linkwithbank.page.html',
  styleUrls: ['./linkwithbank.page.scss'],
})
export class LinkwithbankPage implements OnInit {

  openBankDivBool: boolean = false;
  selectedBank: string = 'Select Bank';
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
  constructor(private navCtrl: NavController,
    private translationService: TranslateService,
    private toastService: ToastService) {

    }

  ngOnInit() {
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
  connect(){
    this.toastService.presentMeToastWithMessage('Bank linking done successfully!');
    this.navCtrl.back();
  }
}
