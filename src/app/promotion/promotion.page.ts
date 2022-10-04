import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.page.html',
  styleUrls: ['./promotion.page.scss'],
})
export class PromotionPage implements OnInit {

  promotionArray = [
    {
      id: "1",
      image: "assets/imgs/promotion-01.jpg",
    },
    {
      id: "2",
      image: "assets/imgs/promotion-02.jpg",
    },
    {
      id: "3",
      image: "assets/imgs/promotion-03.jpg",
    },
    {
      id: "4",
      image: "assets/imgs/promotion-04.jpg",
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
