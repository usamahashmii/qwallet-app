import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-donatenow',
  templateUrl: './donatenow.page.html',
  styleUrls: ['./donatenow.page.scss'],
})
export class DonatenowPage implements OnInit {
  params: any = {};
  constructor(private route: ActivatedRoute,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.params = JSON.parse(params.navigationparams);
      console.log(this.params);
    });
  }
  donateNow(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        navigationparams: JSON.stringify(this.params)
      }
    };
    this.navCtrl.navigateForward('/donationtransaction' , navigationExtras);
  }
}
