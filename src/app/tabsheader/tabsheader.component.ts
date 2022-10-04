import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabsheader',
  templateUrl: './tabsheader.component.html',
  styleUrls: ['./tabsheader.component.scss'],
})
export class TabsheaderComponent implements OnInit {

  constructor(private navCtrl: NavController,
    private menuCtrl: MenuController) { }

  ngOnInit() {}
  //open Main Menu
  openSideMenu(){
    this.menuCtrl.toggle('mainMenu');
  }
  //Open Notification Page
  openNotification(){
    this.navCtrl.navigateForward('/notification');
  }
}
