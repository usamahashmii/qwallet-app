import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoaderService } from '../loader.service';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-changepin',
  templateUrl: './changepin.page.html',
  styleUrls: ['./changepin.page.scss'],
})
export class ChangepinPage implements OnInit {

  showPinDiv: boolean = false;
  constructor(private navCtrl: NavController,
    private loaderService: LoaderService,
    private toastService: ToastService) { }

  ngOnInit() {
  }
  gotoNextField(nextElement , ev){
    console.log(nextElement);
    if(ev.key != ' ' && ev.key != 'Backspace'){
      nextElement.setFocus();
    }
    
  }
  finishFunction(){
    console.log('old pin finish');
    // this.loaderService.presentLoading();
    this.showPinDiv = true;
    // this.loaderService.dismissLoader();
  }
  //for new PIN creation
  gotoNewNextField(nextElement , ev){
    console.log(nextElement);
    if(ev.key != ' ' && ev.key != 'Backspace'){
      nextElement.setFocus();
    }
    
  }
  finishNewFunction(){
    console.log('new create pin finish');
  }
  //for re-entering new PIN
  gotoReNextField(nextElement , ev){
    console.log(nextElement);
    if(ev.key != ' ' && ev.key != 'Backspace'){
      nextElement.setFocus();
    }
    
  }
  finishReFunction(){
    console.log('new Re-enter pin finish');
  }
  //Update Pin
  changePin(){
    this.toastService.presentMeToastWithMessage('Pin updated successfully');
    this.navCtrl.back();
  }
}
