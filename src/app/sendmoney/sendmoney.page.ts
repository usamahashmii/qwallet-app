import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ContactsPage } from '../contacts/contacts.page';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-sendmoney',
  templateUrl: './sendmoney.page.html',
  styleUrls: ['./sendmoney.page.scss'],
})
export class SendmoneyPage implements OnInit {
  favoritesArray = [];
  contact: string = '';
  contactCount = {
    count: 13
  };
  constructor(private settingsService: SettingsService,
    private navCtrl: NavController,
    private modalController: ModalController) { }

  ngOnInit() {
    this.favoritesArray = this.settingsService.favoritesArray;
  }
  getFirstChar(name: string){
    return this.settingsService.getFirstChar(name);
  }
  getFirstName(name: string){
    return this.settingsService.getFirstName(name);
  }
  getColor(index){
    return this.settingsService.getColor(index);
  }
  //Open Selector Buttons
  openSelector(value){
    switch(value){
      case 'qwallet-transfer':
        this.navCtrl.navigateForward('/sendmoneyqwallet')
        break;
      case 'cnic-transfer':
        this.navCtrl.navigateForward('/sendmoneycnic')
        break;
      case 'bank-transfer':
        this.navCtrl.navigateForward('/sendmoneybank')
        break;
        
      default:
        break;
    }
  }
  //pick contact from favorites 
  selectNumber(val: any){
    this.contact = val.number;
  }
  //Pick Contact
  pickContact(){
    this.presentModalContacts();
  }
  deleteItem(val){
    var index = this.favoritesArray.indexOf(val);
    if(index > -1){
      this.favoritesArray.splice(index , 1);
    }
  }
  async presentModalContacts() {
    const modal = await this.modalController.create({
      component: ContactsPage,
      cssClass: 'contact-modal-ctrl'
    });
    modal.onDidDismiss().then(contact => {
      this.contact = contact.data.cellno;
    });
    return await modal.present();
  }
}
