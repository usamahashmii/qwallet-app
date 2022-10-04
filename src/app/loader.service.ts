import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loaderVar: any;
  loginLoaderVar: any;

  constructor(private loadingController: LoadingController) { }
  async presentLoading() {
    this.loaderVar = await this.loadingController.create({
      cssClass: 'waiting-loader',
      spinner: null,
      message: `<ion-spinner style='color: #fff;
      width: 60px;
      height: 45px;' name="dots"></ion-spinner>`
    });
    await await this.loaderVar.present();
  }
  async dismissLoader(){
    return this.loaderVar.dismiss();
  }
  async presentLoginLoading(msg) {
    this.loginLoaderVar = await this.loadingController.create({
      cssClass: 'loader-popup',
      spinner: 'crescent',
      message: msg
    });
    await this.loginLoaderVar.present();
  }
  async dismissLoginLoader(){
    return await this.loginLoaderVar.dismiss();
  }
}
