import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {
  cardsArray = [
    {
      id: "1",
      image: "assets/imgs/debit card.png",
      text: "Debit Card"
    },
    {
      id: "2",
      image: "assets/imgs/wallet visa card.png",
      text: "Visa Card"
    },
    {
      id: "3",
      image: "assets/imgs/qwallet master card.png",
      text: "Master Card"
    }
  ]
  constructor(private navCtrl: NavController,
    private toastService: ToastService) { }

  ngOnInit() {
  }
  getCard(){
    this.toastService.presentMeToastWithMessage('Card request submitted successfully!');
    this.navCtrl.back();
  }
}
