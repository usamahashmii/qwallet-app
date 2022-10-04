import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-electric',
  templateUrl: './electric.page.html',
  styleUrls: ['./electric.page.scss'],
})
export class ElectricPage implements OnInit {
  electricCompArray = [{
    id: 1,
    name: 'AJK Barkiyat',
    image: 'assets/imgs/pic5.png',
  },
  {
    id: 2,
    name: 'GB Barkiyat',
    image: 'assets/imgs/pic4.png',
  },
  {
    id: 3,
    name: 'GEPCO',
    image: 'assets/imgs/pic3.png',
  },
  {
    id: 4,
    name: 'FESCO',
    image: 'assets/imgs/pic4.png',
  },
  {
    id: 5,
    name: 'HESCO',
    image: 'assets/imgs/pic1.png',
  },
  {
    id: 6,
    name: 'SEPCO',
    image: 'assets/imgs/pic2.png',
  },
  {
    id: 7,
    name: 'MEPCO',
    image: 'assets/imgs/pic5.png',
  },
  {
    id: 8,
    name: 'PESCO',
    image: 'assets/imgs/pic4.png',
  }]
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  openCategory(val){
    var name = val.name;
    // switch(name){
    //   case 'AJK Barkiyat':
        let navigationExtras: NavigationExtras = {
          queryParams: {
            navigationparams: JSON.stringify({image: val.image, name: val.name})
          }
        };
        this.navCtrl.navigateForward('/barkiyat' , navigationExtras);
    //     break;
    //   default: 
    //     break;
    // }
  }
}
