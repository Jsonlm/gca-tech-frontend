import { Component, Input, ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule, MapInfoWindow, MapMarker, } from '@angular/google-maps';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface Salesmans {
  id: string;
  photo: string;
  name: string;
  category:  string;
  isActive:boolean;
  lat: number
  lng: number
}

@Component({
  selector: 'app-map-locations',
  standalone: true,
  imports: [CommonModule,GoogleMap, GoogleMapsModule],
  templateUrl: './map-locations.component.html',
  styleUrl: './map-locations.component.sass',
})
export class MapLocationsComponent {

  @Input() salemansItems: string[] = [];
  public statusColorPalette = ['#00913f','#FF0000'];
  saleman: any = {};

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  constructor(private route: ActivatedRoute) { }

  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: any[] = [];

  openInfoWindow(marker: MapMarker, salesman: any) {
   this.saleman = salesman;
    try {
      if (this.infoWindow) this.infoWindow.open(marker);
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit() {
    setTimeout(() => {
     this.salemansItems.map((item: any) => {
        if (this.markerPositions.length <= this.salemansItems.length) {
          this.markerPositions.push({
            id: item.id,
            photo: item.photo,
            name: item.name,
            category: item.category,
            isActive: item.isActive,
            lat: item.coordinates.latitude,
            lng: item.coordinates.longitude
          });
        }
      });
    }, 2000);
  }
}
