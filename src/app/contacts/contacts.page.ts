import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  favoritesArray = [];
  constructor(private settingsService: SettingsService,
    private modalCtrl: ModalController,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.favoritesArray = this.settingsService.favoritesArrayHome;
    console.log(this.settingsService.favoritesArrayHome);
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
  contactPicked(contact){
    this.modalCtrl.dismiss(contact);
  }
}
