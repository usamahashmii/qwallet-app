import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastCtrl: ToastController) { }

  async presentCartToast(){
    let toast = await this.toastCtrl.create({
      message: 'Product Added to Cart Successfully',
      position: 'top',
      duration: 1800,
      cssClass: 'cart_toast',
    });
    return toast.present();
  }
  async presentEmptyCartToast(){
    let toast = await this.toastCtrl.create({
      message: 'Your Cart is Empty',
      position: 'top',
      duration: 1800,
      cssClass: 'cart_toast',
    });
    return toast.present();
  }
  async presentMeToastWithMessage(msg){
    let toast = await this.toastCtrl.create({
      message: msg,
      position: 'top',
      duration: 2500,
      cssClass: 'cart_toast',
    });
    return toast.present();
  }
  async presentWaitToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 1200,
      cssClass: 'add-to-fav-toast'
    });
    return toast.present();
    
  }
}
