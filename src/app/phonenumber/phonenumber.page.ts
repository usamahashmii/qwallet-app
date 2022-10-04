import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';
import { CountriesPage } from '../countries/countries.page';

@Component({
  selector: 'app-phonenumber',
  templateUrl: './phonenumber.page.html',
  styleUrls: ['./phonenumber.page.scss'],
})
export class PhonenumberPage implements OnInit {

  formLogin: FormGroup;
  isSubmitted: boolean = false;
  countryCode: any = "92";
  constructor(private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private menuCtrl: MenuController,
    private modalController: ModalController,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      mobilenumber:  ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      verificationcode: ['', [Validators.required, Validators.pattern(''),Validators.minLength(6)]]
    }, { 
    });
  }
  async privacyPolicyAlert(){
    let alert = await this.alertCtrl.create({
      header: 'Terms & Conditions',
      cssClass: 'privacy-policy-alert',
      mode: 'ios',
      message: 'To protect your legal rights and interests, please read the conditions and accept them',
      buttons: [
        {
          text: 'Disagree',
          role: 'cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    await alert.present();
  }
  loginMe(){
    // this.isSubmitted = true;
    // if (!this.formLogin.valid) {
    //   console.log('Please provide all the required values!')
    //   return false;
    // } else {     
    // }
    this.menuCtrl.enable(true,'menu-main');//Disable Menu
    this.menuCtrl.enable(true,'menu-more');//Disable Menu
    this.navCtrl.navigateRoot('/welcome');
  }
  get errorControl() {
    return this.formLogin.controls;
  }
  loginWithInfo(){
    this.navCtrl.navigateForward('/login');
  }
  async pickCountryCode(){
    const modal = await this.modalController.create({
      component: CountriesPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null && dataReturned.data !== null) {
        this.countryCode = dataReturned.data.number;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }
  login(){
    this.navCtrl.navigateForward('/login');
  }
  settings(){
    this.navCtrl.navigateForward('/setting');
  }
}
