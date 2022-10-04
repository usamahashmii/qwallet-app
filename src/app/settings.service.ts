import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  //Test
  transactionHistoryDaily = [
    {
      id: 1,
      transactionWith: "QLoad - Jazz",
      transactionType: "load",
      date: "05 sep",
      transactionValue: "QCoins 320"
    },
    {
      id: 2,
      transactionWith: "HBL Bank - QWallet",
      transactionType: "bank",
      date: "12 sep",
      transactionValue: "QCoins 210"
    },
    {
      id: 3,
      transactionWith: "QLoad - Jazz",
      transactionType: "load",
      date: "23 sep",
      transactionValue: "QCoins 61"
    },
    {
      id: 4,
      transactionWith: "QLoad - Warid",
      transactionType: "load",
      date: "23 oct",
      transactionValue: "QCoins 698"
    },
    {
      id: 5,
      transactionWith: "Faisal Bank - QWallet",
      transactionType: "bank",
      date: "03 dec",
      transactionValue: "QCoins 20"
    },
    {
      id: 5,
      transactionWith: "Meezan Bank - QWallet",
      transactionType: "bank",
      date: "09 dec",
      transactionValue: "QCoins 30"
    }
  ];
  transactionHistoryWeekly = [
    {
      id: 1,
      transactionWith: "QLoad - Jazz",
      transactionType: "load",
      date: "1 week sep",
      transactionValue: "QCoins 320"
    },
    {
      id: 2,
      transactionWith: "HBL Bank - QWallet",
      transactionType: "bank",
      date: "2 week sep",
      transactionValue: "QCoins 210"
    },
    {
      id: 3,
      transactionWith: "QLoad - Jazz",
      transactionType: "load",
      date: "3 week sep",
      transactionValue: "QCoins 61"
    },
    {
      id: 4,
      transactionWith: "QLoad - Warid",
      transactionType: "load",
      date: "4 week oct",
      transactionValue: "QCoins 698"
    },
    {
      id: 5,
      transactionWith: "Faisal Bank - QWallet",
      transactionType: "bank",
      date: "5 week dec",
      transactionValue: "QCoins 20"
    },
    {
      id: 5,
      transactionWith: "Meezan Bank - QWallet",
      transactionType: "bank",
      date: "6 week dec",
      transactionValue: "QCoins 30"
    }
  ];
  transactionHistoryMonthly = [
    {
      id: 1,
      transactionWith: "QLoad - Jazz",
      transactionType: "load",
      date: "September",
      transactionValue: "QCoins 320"
    },
    {
      id: 2,
      transactionWith: "HBL Bank - QWallet",
      transactionType: "bank",
      date: "September",
      transactionValue: "QCoins 210"
    },
    {
      id: 3,
      transactionWith: "QLoad - Jazz",
      transactionType: "load",
      date: "September",
      transactionValue: "QCoins 61"
    },
    {
      id: 4,
      transactionWith: "QLoad - Warid",
      transactionType: "load",
      date: "October",
      transactionValue: "QCoins 698"
    },
    {
      id: 5,
      transactionWith: "Faisal Bank - QWallet",
      transactionType: "bank",
      date: "December",
      transactionValue: "QCoins 20"
    },
    {
      id: 5,
      transactionWith: "Meezan Bank - QWallet",
      transactionType: "bank",
      date: "December",
      transactionValue: "QCoins 30"
    }
  ];
  transactionHistoryYearly = [
    {
      id: 1,
      transactionWith: "QLoad - Jazz",
      transactionType: "load",
      date: "2019",
      transactionValue: "QCoins 320"
    },
    {
      id: 2,
      transactionWith: "HBL Bank - QWallet",
      transactionType: "bank",
      date: "2019",
      transactionValue: "QCoins 210"
    },
    {
      id: 3,
      transactionWith: "QLoad - Jazz",
      transactionType: "load",
      date: "2019",
      transactionValue: "QCoins 61"
    },
    {
      id: 4,
      transactionWith: "QLoad - Warid",
      transactionType: "load",
      date: "2021",
      transactionValue: "QCoins 698"
    },
    {
      id: 5,
      transactionWith: "Faisal Bank - QWallet",
      transactionType: "bank",
      date: "2021",
      transactionValue: "QCoins 20"
    },
    {
      id: 5,
      transactionWith: "Meezan Bank - QWallet",
      transactionType: "bank",
      date: "2021",
      transactionValue: "QCoins 30"
    }
  ];
  favoritesArray = [
    {
      id: 1,
      name: 'Ardiana Daniral',
      desc: 'some desc',
      number: '+92-212-929-11'
    },
    {
      id: 2,
      name: 'Mther Teresa',
      desc: 'some desc',
      number: '+92-212-929-11'
    },
    {
      id: 3,
      name: 'Mola Sis',
      desc: 'some desc',
      number: '+92-212-929-11'
    },
    {
      id: 4,
      name: 'Badree Smaulas',
      desc: 'some desc',
      number: '+92-212-929-11'
    },
    {
      id: 5,
      name: 'Bhola Record',
      desc: 'some desc',
      number: '+92-212-929-11'
    },
    {
      id: 6,
      name: 'Ducky Bhai',
      desc: 'some desc',
      number: '+92-212-929-11'
    },
  ];
  favoritesArrayHome = [
    {
      id: "1",
      name: "Emily Mona",
      attri: "attri",
      cellno: "+092-292-292-2"
    },{
      id: "2",
      name: "314-7 B",
      attri: "attri",
      cellno: "+092-444-221-5"
    },
    {
      id: "3",
      name: "Bank Lamo",
      attri: "attri",
      cellno: "+092-121-234-0"
    },
    {
      id: "4",
      name: "SHL KK",
      attri: "attri",
      cellno: "+222-788-292-2"
    },
    {
      id: "4",
      name: "SHL LIO",
      attri: "attri",
      cellno: "+114-433-4342-1"
    },
    {
      id: "5",
      name: "BML",
      attri: "attri",
      cellno: "+232-787-786-4"
    },
    {
      id: "6",
      name: "ZUL",
      attri: "attri",
      cellno: "+909-879-556-3"
    }
  ];
  categoryWidgetsArray = [
    {
      id: 1,
      name: 'account_info',
      icon: 'assets/imgs/home-categories/010-loan.svg'
    },
    {
      id: 2,
      name: 'qinsurance',
      icon: 'assets/imgs/home-categories/011-life-insurance.svg'
    },
    {
      id: 3,
      name: 'bill_payment',
      icon: 'assets/imgs/home-categories/ticket.svg'
    },
    {
      id: 4,
      name: 'donation',
      icon: 'assets/imgs/home-categories/012-heart.svg'
    },
    {
      id: 5,
      name: 'discounts',
      icon: 'assets/imgs/home-categories/013-price-tag.svg'
    },
    {
      id: 6,
      name: 'gifts',
      icon: 'assets/imgs/home-categories/014-surprise.svg'
    }
  ];
  //all widgets array
  categoryAllWidgetsArray = [
    {
      id: 1,
      name: 'QLoad',
      icon: 'assets/imgs/004-smartphone.svg'
    },
    {
      id: 2,
      name: 'QBundles',
      icon: 'assets/imgs/004-smartphone.svg'
    },
    {
      id: 3,
      name: 'QWallet',
      icon: 'assets/imgs/001-membership.svg'
    },
    {
      id: 4,
      name: 'CNIC',
      icon: 'assets/imgs/001-membership.svg'
    },
    {
      id: 5,
      name: 'Bank',
      icon: 'assets/imgs/002-bank.svg'
    },
    {
      id: 6,
      name: 'Games',
      icon: 'assets/imgs/005-console.svg'
    },
    {
      id: 7,
      name: 'electricity',
      icon: 'assets/imgs/power-tower.svg'
    },
    {
      id: 8,
      name: 'telephone',
      icon: 'assets/imgs/006-telephone.svg'
    },
    {
      id: 9,
      name: 'gas',
      icon: 'assets/imgs/007-fire.svg'
    },
    {
      id: 10,
      name: 'internet',
      icon: 'assets/imgs/008-world.svg'
    },
    {
      id: 11,
      name: 'water',
      icon: 'assets/imgs/009-drops.svg'
    },
    {
      id: 12,
      name: 'credit_card',
      icon: 'assets/imgs/010-credit-card.svg'
    },
    {
      id: 13,
      name: 'education',
      icon: 'assets/imgs/011-mortarboard.svg'
    },
    {
      id: 14,
      name: 'gov_fees',
      icon: 'assets/imgs/013-crown.svg'
    },
    {
      id: 15,
      name: 'QInsurance',
      icon: 'assets/imgs/014-pay.svg'
    },
    {
      id: 16,
      name: 'QBox',
      icon: 'assets/imgs/016-online-payment.svg'
    },
    {
      id: 17,
      name: 'QShop',
      icon: 'assets/imgs/015-hand.svg'
    },
    {
      id: 18,
      name: 'QTaxi',
      icon: 'assets/imgs/016-online-payment.svg'
    }
  ];
  //
  colorArray = [
    "#c5a98a",
    "#795f43",
    "#4a4b7d",
    "#919bd8",
    "#9db9aa",
    "#949888",
    "#211f19",
    "#8e6848",
    "#a76161",
    "#bf7d8d",
    "#976c9c",
  ];
  constructor() { }
  getFirstChar(name: string){
    // return name.charAt(0) + name.split(' ')[1].charAt(0);
    if(name.includes(' ')){
      return name.charAt(0) + name.split(' ')[1].charAt(0);
    }else{
      return name.charAt(0);
    }
  }
  getFirstName(name: string){
    return name.split(' ')[0];
  }
  getColor(index){
    if(index < this.colorArray.length){
      return this.colorArray[index];
    }else{
      return this.colorArray[index - this.colorArray.length];
    }
  }
  private barcode = new Subject<any>();
  //subscibers
  setBarcode(count){
    this.barcode.next(count);
  }
  getBarcode():Observable<any>{
    return this.barcode.asObservable();
  }
  private profileData = new Subject<any>();
  //set Profile subscribers
  setProfile(count){
    this.profileData.next(count);
  }
  getProfile():Observable<any>{
    return this.profileData.asObservable();
  }
}
