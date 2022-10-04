import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.page.html',
  styleUrls: ['./accountsettings.page.scss'],
})
export class AccountsettingsPage implements OnInit {
  languageChoosen:string = '';
  constructor(private navCtrl: NavController,
    private translate: TranslateService,
    private toastService: ToastService) { }

  ngOnInit() {
    var lang = localStorage.getItem('language');
    this.translate.setDefaultLang(lang ? lang : 'en');
    this.languageChoosen = lang;
  }
  itemClicked(val: any){
    switch(val){
      case 'accountInfo': 
        this.navCtrl.navigateForward('/accountinfo');
        break;
      case 'debit-card': 
        this.navCtrl.navigateForward('/cards');
        break;
      case 'linkwithbank': 
        this.navCtrl.navigateForward('/linkwithbank');
        break;
      case 'changePin':
        this.navCtrl.navigateForward('/changepin');
        break;
    }
  }
   //Langauge Switch
   switchLanguage(language: any) {
    this.languageChoosen = language.value;
    localStorage.setItem('language' , this.languageChoosen);
    this.translate.use(this.languageChoosen);
  }
  //save changes
  saveChanges(){
    this.navCtrl.back();
  }
}
