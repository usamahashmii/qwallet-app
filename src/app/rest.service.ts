import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  baseUrl = 'https://qberg.mn/api/';
  headerInfo: any = {
    "Accept": 'application/json',
    'Authorization': 'Bearer ' ,
  };
  constructor(private httpsClient: HttpClient) { }
  //Create account
  createAccount(formData){
    return this.httpsClient.post(this.baseUrl + 'register',formData,this.headerInfo);
  }
  //Login
  login(formData){
    return this.httpsClient.post(this.baseUrl + 'login',formData,this.headerInfo);
  }
  //Logout
  logout(formData , token){
    let headers = {
      "Accept": 'application/json',
      'Authorization': 'Bearer ' + token,     
    };
    return this.httpsClient.post(this.baseUrl + 'logout',formData, {headers});
  }
  //Get profile data
  getProfileInfo(token){
    let headers = {
      "Accept": 'application/json',
      'Authorization': 'Bearer ' + token,
    };
    return this.httpsClient.get(this.baseUrl + '',{headers});
  }
  //Notifications
  getProfile(token){
    let headers = {
      "Accept": 'application/json',
      'Authorization': 'Bearer ' + token,
    };
    return this.httpsClient.get('https://qberg.mn/api/getUser',{headers});
  }
}
