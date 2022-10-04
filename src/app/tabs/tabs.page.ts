import { Component, OnInit, ViewChild } from '@angular/core';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { SuperTabsConfig } from '@ionic-super-tabs/core';
import { AskusPage } from '../askus/askus.page';
import { HomePage } from '../home/home.page';
import { MapsPage } from '../maps/maps.page';
import { ProfiletabPage } from '../profiletab/profiletab.page';
import { QrPage } from '../qr/qr.page';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  @ViewChild(SuperTabs) superTabs: SuperTabs;
  homePage = HomePage;
  mapsPage = MapsPage;
  qrPage = QrPage;
  news = AskusPage;
  profile = ProfiletabPage;

  opts = {
    icon: false,
    label: true,
    toolbarPos: 'top',
    scrollable: true,
  };
  config: SuperTabsConfig = {
    debug: true,
    allowElementScroll: false,
  };
  tabs: any[] = [];
  activeTab: number = 0;
  
  constructor(private settings: SettingsService){}
  ngOnInit(){}
  ngAfterViewInit() {
    // console.log('Super tabs', this.superTabs);
  }
  //switching Tab
  tabChange(ev: any){
    this.activeTab = ev.detail.index;
  }
  //Open QR
  openQR(){
    this.settings.setBarcode('setup');
  }
}
