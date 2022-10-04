import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-qbundlefin',
  templateUrl: './qbundlefin.page.html',
  styleUrls: ['./qbundlefin.page.scss'],
})
export class QbundlefinPage implements OnInit {
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
  constructor(private toastService: ToastService,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  readyToPay(){
    this.toastService.presentMeToastWithMessage('Bundle purchased successfully');
    this.navCtrl.navigateRoot('/tabs');
  }
}
