import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.page.html',
  styleUrls: ['./forgetpassword.page.scss'],
})
export class ForgetpasswordPage implements OnInit {
  formForgetPassword: FormGroup;
  isSubmitted: boolean = false;
  apiResponse: any;
  
  constructor(private formBuilder: FormBuilder,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.formForgetPassword = this.formBuilder.group({
      email: ['', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    }, { 
    });
  }
  goBack(){
    this.navCtrl.back();
  }
}
