import { Component, ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule, MapInfoWindow, MapMarker, } from '@angular/google-maps';
import { ActivatedRoute } from '@angular/router';
import { Salesman } from '../../core/models/salesman.model.ts';
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

  public position: any;

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  constructor(private route: ActivatedRoute) { }

  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] | any = [];

  addMarker(event: google.maps.MapMouseEvent) {
    try {
      if (event.latLng) this.markerPositions.push(event.latLng.toJSON());
    } catch (error) {
      console.log(error);
    }
  }

  openInfoWindow(marker: MapMarker) {
    try {
      if (this.infoWindow) this.infoWindow.open(marker);
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit() {
    let tempArray: Salesmans[] = [];
    this.route.queryParams.subscribe(params => {
      if (params['array']) {
        tempArray = JSON.parse(params['array']);

        tempArray.map((item: Salesman | any) => {
          if (this.markerPositions.length <= tempArray.length) {
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
      }
    });
  }
}
