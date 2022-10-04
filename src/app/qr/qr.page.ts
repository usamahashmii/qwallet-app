import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  constructor(private settings: SettingsService,
    private barcodeScanner: BarcodeScanner) {}

  ngOnInit() {
    this.settings.getBarcode().subscribe(value => {
      console.log(value);
      const options: BarcodeScannerOptions = {
        preferFrontCamera: false,
        showFlipCameraButton: true,
        showTorchButton: true,
        torchOn: false,
        prompt: 'Place a barcode inside the scan area',
        resultDisplayDuration: 500,
        formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
        orientation: 'portrait',
      };
      this.barcodeScanner.scan().then(barcodeData => {
        console.log('Barcode data', barcodeData);
       }).catch(err => {
           console.log('Error', err);
       });
    });
  }
  
}
