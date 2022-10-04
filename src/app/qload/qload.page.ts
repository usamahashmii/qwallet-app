import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ContactsPage } from '../contacts/contacts.page';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-qload',
  templateUrl: './qload.page.html',
  styleUrls: ['./qload.page.scss'],
})
export class QloadPage implements OnInit {
  segmentSelected: string = 'qload';
  favoritesArray = [];
  contact: string = '';
  callingNetworks = [
    {
      id: 1,
      img: 'assets/imgs/telenor.png',
      name: 'telenor'
    },
    {
      id: 2,
      img: 'assets/imgs/jazz.png',
      name: 'jazz'
    },
    {
      id: 3,
      img: 'assets/imgs/ufone.png',
      name: 'ufone'
    },
    {
      id: 4,
      img: 'assets/imgs/telenor.png',
      name: 'telenor'
    },
    {
      id: 5,
      img: 'assets/imgs/jazz.png',
      name: 'jazz'
    },
    {
      id: 6,
      img: 'assets/imgs/ufone.png',
      name: 'ufone'
    }
  ];
  selectedNetwork = 'telenor';
  constructor(private settingsService: SettingsService,
    private navCtrl: NavController,
    private modalController: ModalController) { }

  ngOnInit() {
    this.favoritesArray = this.settingsService.favoritesArray;
  }
  switchSegment(ev: any){
    this.segmentSelected = ev.detail.value;
    console.log(this.segmentSelected);
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
  //choose number from frequently used
  chooseNumber(val: any){
    this.contact = val.number;
  }
  //Pick Contact
  pickContact(){
    this.presentModalContacts();
  }
  async presentModalContacts() {
    const modal = await this.modalController.create({
      component: ContactsPage,
      cssClass: 'contact-modal-ctrl'
    });
    modal.onDidDismiss().then(contact => {
      this.contact = contact.data.cellno;
      console.log(this.contact);
    });
    return await modal.present();
  }
  //Choose your network
  chooseNetwork(value){
    this.selectedNetwork = value.name;
    console.log(this.selectedNetwork);
  }
  //Qload Next Page
  qloadNext(){
    if(this.segmentSelected =='qload'){
      this.navCtrl.navigateForward('/qloadnext');
    }else{  
      this.navCtrl.navigateForward('/qbundlefin');
    }
    
  }
}
