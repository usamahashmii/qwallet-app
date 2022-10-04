import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.page.html',
  styleUrls: ['./discounts.page.scss'],
})
export class DiscountsPage implements OnInit {
  discountArray = [
    {
      id: 1,
      coverImage: 'assets/imgs/images (2).jpeg',
      blockImage: 'assets/imgs/download (2).jpg',
      rating: 4.8,
      offer_buy: '1',
      offer_get: '1'
    },
    {
      id: 2,
      coverImage: 'assets/imgs/download (1).jpg',
      blockImage: 'assets/imgs/kfc.png',
      rating: 4.8,
      offer_buy: '1',
      offer_get: '1'
    },
    {
      id: 3,
      coverImage: 'assets/imgs/images (3).jpeg',
      blockImage: 'assets/imgs/maccc.png',
      rating: 4.8,
      offer_buy: '1',
      offer_get: '1'
    },
    {
      id: 4,
      coverImage: 'assets/imgs/images (2).jpeg',
      blockImage: 'assets/imgs/download (2).jpg',
      rating: 4.8,
      offer_buy: '1',
      offer_get: '1'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
