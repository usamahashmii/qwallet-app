import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-barkiyatnext',
  templateUrl: './barkiyatnext.page.html',
  styleUrls: ['./barkiyatnext.page.scss'],
})
export class BarkiyatnextPage implements OnInit {

  params: any = {};
  image: string = '';
  name: string = '';

  constructor(private route: ActivatedRoute,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      console.log(JSON.parse(params.navigationparams));
      this.params = JSON.parse(params.navigationparams);
      this.image = this.params.image;
      this.name = this.params.name;
      
    });
  }
  payNow(){
    this.navCtrl.navigateForward('/tabs');
  }
}
