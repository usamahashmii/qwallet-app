import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-askus',
  templateUrl: './askus.page.html',
  styleUrls: ['./askus.page.scss'],
})
export class AskusPage implements OnInit {
  questionArray: any = [
    {
      id: 1,
      qsTitle: "Where can i download QWallet Application?",
      ansDetails: [
        {ansTitle: "iPhone users download the qWallet application from the iOs App Store by searching fr the application by the name Android users cando the same by going to the android Play Store in their mobile phones"},
      ]
    },
    {
      id: 2,
      qsTitle: "What is QWallet?",
      ansDetails: [
        {ansTitle: "qWallet Account is an easy to use actual bank account available for all networks to access from their own mobile phones at any time."}
      ]
    },
    {
      id: 3,
      qsTitle: "Who can be a QWallet Account subscriber?",
      ansDetails: [
        {ansTitle: "Users from all mobile networks can create and se their qWallet mobile accounts by downloading the qWallet application on their mobile phones"}
      ]
    },
    {
      id: 4,
      qsTitle: "Are there any changes for opening QWallet account?",
      ansDetails: [
        {ansTitle: "Opening qWallet account is free of cost for all users."
      }]},
      {
        id: 4,
        qsTitle: "What if account alreadt exsist on mobile number?",
        ansDetails: [
          {ansTitle: "If an account already exists on the CNIC the user has provided, he must call the qWallet helpline and get himself verified and the accont can be migrated."
        }
      ]
      }

      ];
    
  constructor() { }

  ngOnInit() {
    this.questionArray.forEach(item => item["expanded"]= false);
  }
  ///accordians store menu
  expandStoreItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.questionArray.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
}
