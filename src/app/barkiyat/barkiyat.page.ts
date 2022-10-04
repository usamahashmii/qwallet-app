import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-barkiyat',
  templateUrl: './barkiyat.page.html',
  styleUrls: ['./barkiyat.page.scss'],
})
export class BarkiyatPage implements OnInit {

  params: any = {};
  image: string = '';
  constructor(private navCtrl: NavController,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      console.log(JSON.parse(params.navigationparams));
      this.params = JSON.parse(params.navigationparams);
      this.image = this.params.image;
    });
  }
  goToNxt(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        navigationparams: JSON.stringify({image: this.image,name: this.params.name})
      }
    };
    this.navCtrl.navigateForward('/barkiyatnext' , navigationExtras);
  }
}
