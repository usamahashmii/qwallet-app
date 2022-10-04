import { Component } from '@angular/core';
import { MenuController, NavController, Platform } from '@ionic/angular';
//Translation
import { TranslateService } from '@ngx-translate/core';
import { DataService } from './data.service';
import { RestService } from './rest.service';
import { SettingsService } from './settings.service';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  languageChoosen:string = '';
  profileData: any = {image: 'assets/imgs/profile.svg',
    name: 'Kevin Levin',
    cnic: '26372-09273222-1',
    cellNo: '0900-929838-1',
    email: 'Levin92@gmail.com',
    dob: '3 Jan 2013',
    location: 'Multan, Pakistan'
  };
  constructor(private navCtrl: NavController,
    private menuCtrl: MenuController,
    private restService: RestService,
    private settingsService: SettingsService,
    private dataService: DataService,
    private platform: Platform,
    private toastCtrl: ToastService,
    private translate: TranslateService) {
      //Language setup
      this.platform.ready().then(res => {
        var lang = localStorage.getItem('language');
        translate.setDefaultLang(lang ? lang : 'en');
        this.languageChoosen = lang;
        // getting profile data from storage
        // this.dataService.getProfileData().then(res => {
        //   this.profileData = res;
        // } , err => {
        //   console.log(err);
        // });
        this.dataService.getProfileInfo().subscribe(data => {
          this.profileData = data;
        });

        //get the profile data subscriber value to update the side menu
        // this.settingsService.getProfile().subscribe(result => {
        //   this.profileData = result;
        //   console.log(this.profileData);
        // });
        
        //Check User Token
        var userToken = localStorage.getItem('userToken');
        if(userToken != null && userToken != 'null'){
          console.log(userToken);
          this.menuStatus(true);
          // this.getProfileInfo(userToken);
          if(localStorage.getItem('userInfo')){
            this.profileData = JSON.parse(localStorage.getItem('userInfo'));
          }else{
            
          }
          this.navCtrl.navigateRoot('/tabs');
        }else{
          this.menuStatus(false);
          // this.navCtrl.navigateRoot('/login');
        }
      });
  }
  //Profile Page
  openProfile(){
    this.closeMenu();
    this.navCtrl.navigateForward('/profile');
  }
  closeMenu(){
    this.menuCtrl.close();
  }
  openSideMenuItem(val: any){
    this.closeMenu();
    switch(val) {
      case 'accounts':
        this.navCtrl.navigateForward('/accountsettings');
        break;
      case 'transactions':
        this.navCtrl.navigateForward('/transactionhistory');
        break;
      case 'favorites':
        this.navCtrl.navigateForward('/favoritetransfers');
        break;
      case 'invite':
        this.navCtrl.navigateForward('/invite');
        break;
      case 'help': 
        this.navCtrl.navigateBack('faq');
        break 
      case 'chat': 
        this.navCtrl.navigateForward('/chat');
        break
      case 'news': 
        this.navCtrl.navigateForward('/news');
        break;
      default:
        // code block
    }
  }
  //Logout
  logout(){
    this.menuCtrl.close();
    this.menuStatus(false);
    localStorage.setItem('userToken', null);
    localStorage.setItem('userInfo', null);
    this.navCtrl.navigateRoot('/phonenumber');
  }
  menuStatus(status){
    this.menuCtrl.enable(status, 'mainMenu');
    this.menuCtrl.enable(status, 'appsMenu');
  }
  getProfileInfo(userToken){
    this.restService.getProfile(userToken).subscribe(data => {
      console.log('get profile');
      console.log(data);
      this.dataService.saveProfileInfo(data);
    } , err => {
      if(err.error.message == 'Unauthenticated.'){
        //Session is expired in the DB, logout the user 
        // localStorage.clear();//Clear Local Storage
        this.logout();
        this.toastCtrl.presentWaitToast('Session expired, please login again');
      }      
    });
  }
}
