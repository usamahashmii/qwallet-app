import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-transactiondetail',
  templateUrl: './transactiondetail.page.html',
  styleUrls: ['./transactiondetail.page.scss'],
})
export class TransactiondetailPage implements OnInit {

  transactionDetail: any;
  constructor(private route: ActivatedRoute,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.transactionDetail = JSON.parse(params.navigationparams);
      console.log(this.transactionDetail);
    });
  }
  goHome(){
    this.navCtrl.navigateRoot('/tabs');
  }
}
