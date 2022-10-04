import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { CountriesPage } from '../countries/countries.page';
import { RestService } from '../rest.service';
import { LoaderService } from '../loader.service';
import { DataService } from '../data.service';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  formLogin: FormGroup;
  isSubmitted: boolean = false;
  countryCode: any = "92";
  apiResponse: any = {};

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value
    return pass === confirmPass ? null : { notSame: true }
  }
  constructor(private navCtrl: NavController,
    private loadService: LoaderService,
    private restService: RestService,
    private modalController: ModalController,
    private dataService: DataService,
    private menuCtrl: MenuController,
    private toastService: ToastService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_][a-zA-Z0-9_.]*'),,Validators.minLength(7)]],
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'),Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.pattern(''),Validators.minLength(8)]],
      passwordconfirm: ['', {Validators: this.checkPasswords},Validators.minLength(8)],
      dob: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$'),Validators.minLength(10)]],
      // verificationCode: ['', [Validators.required, Validators.pattern('^[0-9]*$'),Validators.minLength(6)]],
    }, { 
      validator: this.ConfirmedValidator('password', 'passwordconfirm')
    });
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
    this.navCtrl.back();
  }
  signMeUp(){
    this.isSubmitted = true;
    if (!this.formLogin.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.formLogin.value);
      //Send request on server
      //new Date(birthdate), "yyyy-MM-dd"

      this.loadService.presentLoginLoading('Creating account, Please wait..');
      var date = this.formLogin.value.dob.split('T')[0];
      console.log(date);   

      var formData = new FormData();
      formData.append('username' , this.formLogin.value.username);
      formData.append('password' , this.formLogin.value.password);
      formData.append('password_confirm' , this.formLogin.value.passwordconfirm);
      formData.append('name' , this.formLogin.value.firstName);
      formData.append('last_name' , null);
      formData.append('date_of_birth' , date);
      formData.append('email' , this.formLogin.value.email);
      formData.append('phone_code' , this.countryCode);
      formData.append('phone_number' , this.formLogin.value.phoneNumber);
      // formData.append('verificationCode' , this.formLogin.value.verificationCode);
      this
      this.restService.createAccount(formData).subscribe(respone => {
        console.log(respone);
        this.apiResponse = respone;

        if(this.apiResponse.status == 'success'){
          this.toastService.presentWaitToast(this.apiResponse.message);

          //Store profile Information
          localStorage.setItem('userToken' , this.apiResponse.token);
          // var userToken = localStorage.getItem('userToken');
          // console.log(userToken);
          // if(userToken){
          //   this.restService.headerInfo.Authorization = 'Bearer ' + userToken; //Save token in the rest Service Header subject
          // }else{
          //   //
          // }
          this.saveProfileInfo(this.apiResponse.token);
          //Case successfull, Redirect to next page 
          this.navCtrl.navigateRoot('/tabs');
          setTimeout(() => {
            this.loadService.dismissLoginLoader();
            this.toastService.presentWaitToast(this.apiResponse.msg);
          } , 300);

        }else{
          this.loadService.dismissLoginLoader();
        }

      }, err => {
        this.loadService.dismissLoginLoader();
        console.log(err);
        this.toastService.presentWaitToast('Opps! Server Error!')
      });
    }
  }
  get errorControl() {
    return this.formLogin.controls;
  }

  ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }
  saveProfileInfo(userToken){
    // this.restService.getProfile(userToken).subscribe(data => {
    //   // console.log('get profile');
    //   var profile: any = data;
      this.menuStatus(true);
      this.dataService.saveProfileInfo(this.apiResponse.user);
      localStorage.setItem('userInfo', JSON.stringify(this.apiResponse.user));
      console.log(this.apiResponse.user);
    // } , err => {
    //   if(err.error.message == 'Unauthenticated.'){
    //     //Session is expired in the DB, logout the user 
    //     // localStorage.clear();//Clear Local Storage
    //     localStorage.clear();
    //   }      
    // });
  }
  menuStatus(status){
    this.menuCtrl.enable(status, 'mainMenu');
    this.menuCtrl.enable(status, 'appsMenu');
  }
}
