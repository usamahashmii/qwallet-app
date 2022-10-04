import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SettingsService } from '../settings.service';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';

@Component({
  selector: 'app-transactionhistory',
  templateUrl: './transactionhistory.page.html',
  styleUrls: ['./transactionhistory.page.scss'],
})
export class TransactionhistoryPage implements OnInit {

  @Output() 
  dateChange:EventEmitter< MatDatepickerInputEvent< any>>;

  routineSelected: string = 'daily';
  viewSelected: string = 'daily';
  transactionHistory = [];
  transactionHistoryDaily: any;
  transactionHistoryWeekly: any;
  transactionHistoryMonthly: any;
  transactionHistoryYearly: any;

  datePicked: any;
  content: any;

  constructor(private settingsService: SettingsService,
    public PDFgenerator: PDFGenerator,
    private navCtrl: NavController) { }

  ngOnInit() {  
    this.transactionHistory = this.settingsService.transactionHistoryDaily;
  }
  filterRoutine(ev: any){
    this.routineSelected = ev.value;
    switch(this.routineSelected){
      case 'daily': 
        this.transactionHistory = this.settingsService.transactionHistoryDaily;
        break;
      case 'weekly': 
        this.transactionHistory = this.settingsService.transactionHistoryWeekly;
        break;
      case 'monthly': 
        this.transactionHistory = this.settingsService.transactionHistoryMonthly;
        break;
      case 'yearly': 
        this.transactionHistory = this.settingsService.transactionHistoryYearly;
        break;
    }
  }
  viewTransactionDettail(transaction){
    switch(this.routineSelected){
      case 'daily': 
        let navigationExtras: NavigationExtras = {
          queryParams: {
            navigationparams: JSON.stringify(transaction)
          }
        };
        this.navCtrl.navigateForward('/transactiondetail', navigationExtras);
        break;
      case 'weekly': 
        this.transactionHistory = this.settingsService.transactionHistoryDaily;
        this.viewSelected = 'daily';
        break;
      case 'monthly': 
        this.transactionHistory = this.settingsService.transactionHistoryWeekly;
        this.viewSelected = 'weekly';
        break;
      case 'yearly': 
        this.transactionHistory = this.settingsService.transactionHistoryMonthly;
        this.viewSelected = 'monthly';
        break;
      }
      this.routineSelected = this.viewSelected;
  }
  dateChanged(ev: any){
    this.datePicked = ev.value;
    this.datePicked = this.formatDate(this.datePicked);
  }
  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }
  //Download Report Now 
  downloadReport(){
    this.content = document.getElementById('transaction-histroy-id').innerHTML;
    let options = {
      documentSize: 'A4',
      type: 'share',
      // landscape: 'portrait',
      fileName: 'Order-Invoice.pdf'
    };
    this.PDFgenerator.fromData(this.content,options).then((base64) => {
      console.log('OK', base64);
    }).catch((error) => {
      console.log('error', error);
    });
  }
}
