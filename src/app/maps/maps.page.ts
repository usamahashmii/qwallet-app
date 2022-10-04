import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  @ViewChild('map', { static: true }) mapElement: ElementRef;
  constructor() { }

  ngOnInit() {
    this.oninitMap();
  }
  oninitMap() {   
    let latLng = new google.maps.LatLng(37.785834, -122.406417);
      const map = new google.maps.Map(this.mapElement.nativeElement, {
           zoom: 17,
           mapTypeId: google.maps.MapTypeId.ROADMAP,
           center: latLng,
      });
    } 
}
