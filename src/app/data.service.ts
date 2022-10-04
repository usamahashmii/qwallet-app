import { Injectable } from '@angular/core';
//plugins
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public profileData = new BehaviorSubject<any>([]);
  constructor(private nativeStorage: NativeStorage) { }
  saveProfileData(json){
    return this.nativeStorage.setItem('profile' , json);
  }
  getProfileData(){
    return this.nativeStorage.getItem('profile');
  }
  saveProfileInfo(profileData){
    this.profileData.next(profileData);
  }
  getProfileInfo(){
    return this.profileData.asObservable();
  }
}
