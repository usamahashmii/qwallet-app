import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-giftstransaction',
  templateUrl: './giftstransaction.page.html',
  styleUrls: ['./giftstransaction.page.scss'],
})
export class GiftstransactionPage implements OnInit {

  transactionDetail: any;
  paramsVal: string = '';
  constructor(private route: ActivatedRoute,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.paramsVal = params.navigationparams;
    });
  }
  goHome(){
    this.navCtrl.navigateRoot('/tabs');
  }
}
