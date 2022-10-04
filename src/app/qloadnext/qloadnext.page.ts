import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-qloadnext',
  templateUrl: './qloadnext.page.html',
  styleUrls: ['./qloadnext.page.scss'],
})
export class QloadnextPage implements OnInit {
  networkSelected: string = 'zong';
  bundlePurchasedMessage: string = 'Bundle Purchased Successfully';
  constructor(private toastService: ToastService,
    private translate: TranslateService,
    private navCtrl: NavController) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.translate.get('bundle_purchased_successfully').subscribe(res => {
      this.bundlePurchasedMessage = res;
    });
  }
  networkChoosen(ev: any){
    this.networkSelected = ev.detail.value;
  }
  readyToPay(){
    this.toastService.presentMeToastWithMessage(this.bundlePurchasedMessage);
    this.navCtrl.navigateRoot('/tabs');
  }
}
