import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.page.html',
  styleUrls: ['./invite.page.scss'],
})
export class InvitePage implements OnInit {
  invitationText: string = 'Invitation sent successfully';
  constructor(private navCtrl: NavController,
    private translate: TranslateService,
    private toastService: ToastService) {}

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.translate.get('invitation_sent_successfully').subscribe(res => {
      this.invitationText = res;
    });
  }
  invite(){
    this.toastService.presentMeToastWithMessage(this.invitationText);
    this.navCtrl.back();
  } 
}
