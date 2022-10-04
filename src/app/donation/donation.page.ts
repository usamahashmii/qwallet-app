import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.page.html',
  styleUrls: ['./donation.page.scss'],
})
export class DonationPage implements OnInit {
  donationArray = [
    {
      id: 1,
      image: "assets/imgs/download.png",
      name: "Shaukat Khanam"
    },
    {
      id: 2,
      image: "assets/imgs/edhi-logo.jpg",
      name: "Edhi Foundation"
    },
    {
      id: 3,
      image: "assets/imgs/D-g4Ywjr_400x400.jpg",
      name: "Rizq"
    },
    {
      id: 4,
      image: "assets/imgs/new-approved-logo-curve-CYTE.png",
      name: "Cyte Foundation"
    },
    {
      id: 5,
      image: "assets/imgs/care.png",
      name: "Care"
    }
  ];
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  donate(val){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        navigationparams: JSON.stringify(val)
      }
    };
    this.navCtrl.navigateForward('/donatenow' , navigationExtras);
  }
}
