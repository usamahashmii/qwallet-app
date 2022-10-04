import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { ContactsPage } from '../contacts/contacts.page';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.page.html',
  styleUrls: ['./gifts.page.scss'],
})
export class GiftsPage implements OnInit {
  contact: string = '';
  constructor(private navCtrl: NavController,
    private toastService: ToastService,
    private modalController: ModalController) { }

  ngOnInit() {
  }
  async contacts(){
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
  openTransactionPage(val){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        navigationparams: val
      }
    };
    this.navCtrl.navigateForward('/giftstransaction', navigationExtras);
  }
  sendGift(){
    this.toastService.presentMeToastWithMessage('Gift sent succesfully!');
    this.navCtrl.navigateForward('/tabs');    
  }
}
