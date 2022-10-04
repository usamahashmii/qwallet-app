import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-appsmenu',
  templateUrl: './appsmenu.component.html',
  styleUrls: ['./appsmenu.component.scss'],
})
export class AppsmenuComponent implements OnInit {

  constructor(public menuCtrl: MenuController) { }

  ngOnInit() {}

  openAppsMenu(){
    this.menuCtrl.toggle('appsMenu');
  }
}
