import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  notificationArray = [
    {
      id: "1",
      text: "You completed your transaction"
    },
    {
      id: "2",
      text: "Payment of 1288 added to your wallet"
    },
    {
      id: "3",
      text: "Welcome to QWallet"
    },
    {
      id: "4",
      text: "You recieved a payment"
    },
    {
      id: "5",
      text: "Payment sent successfully"
    }
  ];
  colorArray = [];

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.colorArray = this.settingsService.colorArray;
  }
  getFirstChar(name: string){
    return name.charAt(0);
  }
  getColor(index){
    if(index < this.colorArray.length){
      return this.colorArray[index];
    }else{
      return this.colorArray[index - this.colorArray.length];
    }
  }
}
