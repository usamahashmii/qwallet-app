import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { CameraService } from '../camera.service';
import { DataService } from '../data.service';
import { SettingsService } from '../settings.service';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileData: any = {image: 'assets/imgs/profile.svg',
  name: 'Kevin Levin',
  cnic: '26372-09273222-1',
  cellNo: '0900-929838-1',
  email: 'Levin92@gmail.com',
  dob: '3 Jan 2013',
  location: 'Multan, Pakistan'
};
  constructor(private alertController: AlertController,
    private navCtrl: NavController,
    private cameraService: CameraService,
    private dataService: DataService,
    private settingsService: SettingsService,
    private toastService: ToastService) { }

  ngOnInit() {
    // getting profile data from storage
    this.dataService.getProfileData().then(res => {
      this.profileData = res;
     } , err => {
       console.log(err);
     });
    //get the profile data subscriber value to update the side menu
    this.settingsService.getProfile().subscribe(result => {
      this.profileData = result;
    });
  }
  editProfile(indic, val){
    this.presentAlertPrompt(indic, val);
  }
  async presentAlertPrompt(indic, val) {
    const alert = await this.alertController.create({
      cssClass: 'profile-inputs-alert',
      header: 'Update Profile',
      inputs: [
        {
          name: indic,
          type: 'text',
          value: val,
          placeholder: indic
        },
        // {
        //   name: 'name8',
        //   type: 'password',
        //   placeholder: 'Advanced Attributes',
        //   cssClass: 'specialClass',
        //   attributes: {
        //     maxlength: 4,
        //     inputmode: 'decimal'
        //   }
        // }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data: any) => {
            console.log(data);
            switch(indic){
              case 'Name':
                this.profileData.name = data.Name;
                break;
              case 'cnic': 
                this.profileData.cnic = data.cnic;
                break;
              case 'CellNo':
                this.profileData.cellNo = data.CellNo;
                break;
              case 'Email': 
                this.profileData.email = data.Email;
                break;
              case 'country': 
                this.profileData.location = data.country;
                break;
            }
          }
        }
      ]
    });

    await alert.present();
  }
  //capturing photo
  takeClick(){
    this.presentPictureAlert();
  }
  async presentPictureAlert() {
    const alert = await this.alertController.create({
      cssClass: 'picture-alert',
      header: 'Choose',
      message: 'Get Image From?',
      buttons: [
        {
          text: 'Gallery',
          cssClass: 'alert_gallery_btn',
          handler: () => {
            this.cameraService.captureProfilePhoto('gallery').then((imageData) => {
              this.settingUpImage(imageData);
            }, err => {
              console.log(err);
            });
          }
        }, {
          text: 'Camera',
          cssClass: 'alert_camera_btn',
          handler: () => {
            this.cameraService.captureProfilePhoto('camera').then((imageData) => {
              this.settingUpImage(imageData);
            }, err => {
              console.log(err);
            });
          }
        }
      ]
    });
    await alert.present();
  }
  settingUpImage(imageData){
    this.profileData.image = 'data:image/jpeg;base64,' + imageData;
    const blobImg = this.dataURItoBlob(this.profileData.image);
    const formData: FormData = new FormData();
    formData.append('avatar', blobImg, 'image.jpeg');
    console.log(blobImg);
  }
  dataURItoBlob(dataURI: any) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    let byteString: any;
    if (dataURI.split(',')[0].indexOf('base64') >= 0) {
      byteString = atob(dataURI.split(',')[1]);
    } else {
      byteString = unescape(dataURI.split(',')[1]);
    }
    // separate out the mime component
    const mimeString = dataURI
      .split(',')[0]
      .split(':')[1]
      .split(';')[0];
    // write the bytes of the string to a typed array
    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], { type: mimeString });
  }
   //Save Profile
   saveChanges(){
    var json = {
      name: this.profileData.name,
      cnic: this.profileData.cnic,
      cellNo: this.profileData.cellNo,
      email: this.profileData.email,
      dob: this.profileData.dob,
      location: this.profileData.location,
      image: this.profileData.image
    };
    this.dataService.saveProfileData(json).then(res => {
      // console.log(res);
      this.settingsService.setProfile(json);
      this.toastService.presentMeToastWithMessage('Profile updated successfully');
      this.navCtrl.back();
    } , err => {
      console.log(err);
    });
  }
}
