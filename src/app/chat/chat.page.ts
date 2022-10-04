import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild(IonContent, {read: IonContent, static: false}) myContent: IonContent;

  chatArray = [{
    id: 1,
    type: 'support',
    message: 'Hello dear! How may i help you?',
    desc: 'some desc'
  },
  {
    id: 2,
    type: 'customer',
    message: 'Hi, How are you, i need to ask something from you!',
    desc: 'some desc'
  },
  {
    id: 3,
    type: 'support',
    message: 'Yes? Please dear',
    desc: 'some desc'
  },
  {
    id: 4,
    type: 'support',
    message: 'You there?',
    desc: 'some desc'
  },{
    id: 5,
    type: 'customer',
    message: 'No! :)',
    desc: 'some desc'
  },];
  messageTxt: string = '';
  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.scrollToBottomOnInit();
  }
  send(){
    if(this.messageTxt != ''){
      var obj: any = {
        type: 'customer',
        message: this.messageTxt,
        desc: 'some desc'
      }
      this.chatArray.push(obj);
      this.messageTxt = '';
      this.scrollToBottomOnInit();
    }
  }
  sendShortMessage(val){
    switch(val){
      case 'its_ok':
        this.getKeyWord(val);
        break;
      case 'money_received':
        this.getKeyWord(val);
        break;
      case 'sending_money':
        this.getKeyWord(val);
        break; 
      case 'haha_funny':
        this.getKeyWord(val);
        break;
      case 'thanks':
        this.getKeyWord(val);
        break;
      case 'you_are_kind':
        this.getKeyWord(val);
        break;
    }
  }
  getKeyWord(val){
    this.translate.get(val).subscribe(res => {
      var obj: any = {
        type: 'customer',
        message: res,
        desc: 'some desc'
      }
      this.chatArray.push(obj);
      this.scrollToBottomOnInit();
    });
  }
  scrollToBottomOnInit() {
    setTimeout(() => {
      this.myContent.scrollToBottom(300);
   }, 300);
  }
}
