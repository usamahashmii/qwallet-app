import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { LoaderService } from '../loader.service';
import { RestService } from '../rest.service';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin: FormGroup;
  isSubmitted: boolean = false;
  apiResponse: any;

  constructor(private navCtrl: NavController,
    private alertCtrl: AlertController,
    private loadService: LoaderService,
    private toastService: ToastService,
    private restService: RestService,
    private dataService: DataService,
    private menuCtrl: MenuController,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_][a-zA-Z0-9_.]*'),,Validators.minLength(7)]],
      password: ['', [Validators.required, Validators.pattern(''),Validators.minLength(8)]]
    }, { 
    });
  }
  loginMe(){
    this.isSubmitted = true;
    if (!this.formLogin.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {     

      this.loadService.presentLoginLoading('Login, Please wait..');
      console.log(this.formLogin.value);
      //Send request on server
      
      var formData = new FormData();
      formData.append('username' , this.formLogin.value.username);
      formData.append('password' , this.formLogin.value.password);
      this.restService.login(formData).subscribe(respone => {
        console.log(respone);
        this.apiResponse = respone;
        this.loadService.dismissLoginLoader();
        if(this.apiResponse.status == 'success'){
          //Store profile Information
          localStorage.setItem('userToken' , this.apiResponse.token);
          this.menuStatus(true);
          this.dataService.saveProfileInfo(this.apiResponse.user);
          localStorage.setItem('userInfo', JSON.stringify(this.apiResponse.user));
          this.navCtrl.navigateRoot('/tabs');
        }else{
          this.toastService.presentWaitToast(this.apiResponse.msg);
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
  menuStatus(status){
    this.menuCtrl.enable(status, 'mainMenu');
    this.menuCtrl.enable(status, 'appsMenu');
  }
  signup(){
    this.navCtrl.navigateForward('/signup');
  }
  forgetPassword(){
    this.navCtrl.navigateForward('/forgetpassword');
  }
  goBack(){
    this.navCtrl.back();
  }
}
