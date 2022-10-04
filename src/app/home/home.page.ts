import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { LoaderService } from '../loader.service';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
   //slider
   slideOpts = {
    initialSlide: 0,
    speed: 1000,
    autoplay:true,
    loop: true,
    pagination: false,
  };
  favoritesArray = [];
  colorArray = [];
  dateDisp: string = '';
  timeDisp: string = '';
  profileData: any = {image: 'assets/imgs/profile.svg',
    name: 'Kevin Levin',
    cnic: '26372-09273222-1',
    cellNo: '0900-929838-1',
    email: 'Levin92@gmail.com',
    dob: '3 Jan 2013',
    location: 'Multan, Pakistan'
  };
  categoryWidgetsArray = [];
 constructor(private menuCtrl: MenuController,
  private router: Router,
  private settingsService: SettingsService,
  private loaderService: LoaderService,
  private dataService: DataService,
  private navCtrl: NavController){}
  ngOnInit(){
    this.colorArray = this.settingsService.colorArray;
    this.favoritesArray = this.settingsService.favoritesArrayHome;
    this.categoryWidgetsArray = this.settingsService.categoryWidgetsArray;
    //form date to display on home
    this.setUpDate();
    // getting profile data from storage
    // this.dataService.getProfileData().then(res => {
    //   this.profileData = res;
    //  } , err => {
    //    console.log(err);
    //  });
    //get the profile data subscriber value to update the side menu
    // this.settingsService.getProfile().subscribe(result => {
    //   this.profileData = result;
    //   console.log(this.profileData);
    // });


    
    this.dataService.getProfileInfo().subscribe(data => {
      this.profileData = data;      
    });
    this.profileData = JSON.parse(localStorage.getItem('userInfo'));
    console.log(this.profileData, 'Home');
  }
  //Open short cuts programs
  shortCuts(val){
    switch(val){
      case 'sendmoney': 
        this.navCtrl.navigateForward('/sendmoney');
        break;
      case 'qload': 
        this.navCtrl.navigateForward('/qload');
        break;
      default: 
        break;
    }
  }
  getFirstChar(name: string){
    return this.settingsService.getFirstChar(name);
  }
  getFirstName(name: string){
    return this.settingsService.getFirstName(name);
  }
  getColor(index){
    return this.settingsService.getColor(index);
  }
  openPromotions(){
    this.navCtrl.navigateForward('/promotion');
  }
  //Open cards page
  openCardsPage(){
    this.navCtrl.navigateForward('/cards');
  }
  //Open Fav Page
  favorites(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        navigationparams: JSON.stringify(this.favoritesArray)
      }
    };
    this.navCtrl.navigateForward('/favorites', navigationExtras)
  }
  //set Date
  setUpDate(){
    var date = new Date();
    const names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayName = names[date.getDay()];
    dayName = dayName.substring(0,3);
    this.dateDisp = date.getUTCDate() + ' ' +dayName + ', ' + date.getFullYear();// date to display
    this.timeDisp = date.getHours() + ':' + date.getMinutes();// time to display
  }
  //More Widgets
  widgets(val){
    switch(val){
      case 'more':
        this.navCtrl.navigateForward('/morewidgets');
        break;
      case 'shorts':
        this.navCtrl.navigateForward('/shortcuts');
        break;
      default:
        break;
    }
  }
  //
  openCategories(val){
    var value = val.name;
    console.log(value);
    switch(value){
      case 'bill_payment':
        this.navCtrl.navigateForward('/selectpayment');
        break;
      case 'gifts':
        this.navCtrl.navigateForward('/gifts');
        break; 
      case 'discounts':
        this.navCtrl.navigateForward('/discounts');
        break; 
      case 'donation':
        this.navCtrl.navigateForward('/donation');
        break; 
      case 'account_info':
        this.navCtrl.navigateForward('/accountinfo');
        break; 
      case 'QLoad': 
        this.navCtrl.navigateForward('/qload');
        break;
      case 'QBundles': 
        this.navCtrl.navigateForward('/qload');
        break;
      case 'QWallet': 
        this.navCtrl.navigateForward('/sendmoney');
        break;
      case 'CNIC': 
        this.navCtrl.navigateForward('/sendmoney');
        break;
      case 'Bank': 
        this.navCtrl.navigateForward('/sendmoney');
        break;
      case 'credit_card': 
        this.navCtrl.navigateForward('/cards');
        break;
      default:
        this.navCtrl.navigateForward('/electric');
        break;
    }
  }
  //Refresh Page
  refreshPage(){
    this.setUpDate();
    this.loaderService.presentLoading();
    setTimeout(() => {
      this.loaderService.dismissLoader();
    } , 1500);
  }
}
