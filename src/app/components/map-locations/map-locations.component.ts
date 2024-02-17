import { Component, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule, MapInfoWindow, MapMarker, } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { SalesmanViewComponent } from '../shared/dialogs/salesman-view/salesman-view.component';
import { SalesmanService } from '../../core/services/salesman.service';
import { defaultIfEmpty } from 'rxjs';

export interface Salesmans {
  id: string;
  photo: string;
  name: string;
  category: string;
  isActive: boolean;
  lat: number;
  lng: number;
  vehicle: string;
  iconUrl: string;
}

@Component({
  selector: 'app-map-locations',
  standalone: true,
  imports: [CommonModule, GoogleMap, GoogleMapsModule, SalesmanViewComponent],
  templateUrl: './map-locations.component.html',
  styleUrl: './map-locations.component.sass',
})
export class MapLocationsComponent {
  @Input() salemansItems: string[] = [];

  public salemansItem: Salesmans | any;
  public show: boolean = false;
  public disabled: boolean = true;

  public statusColorPalette = ['#00913f', '#FF0000'];
  saleman: any = {};

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  constructor(readonly salesService: SalesmanService) { }

  center: google.maps.LatLngLiteral = { lat: 4, lng: -74 };
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

  ngOnChanges(changes: SimpleChanges | any) {
    this.updateMapMarkers(changes.salemansItems.currentValue);
  }

  updateMapMarkers(salesmanItems: any[]) {
    this.markerPositions = salesmanItems.map(item => ({
      id: item.id,
      photo: item.photo,
      name: item.name,
      category: item.category,
      isActive: item.isActive,
      lat: item.coordinates.latitude,
      lng: item.coordinates.longitude,
      vehicle: item.vehicle
    }));
  }

  getSalesmanInfo(salesman: any) {
    let obj = {};

    this.salesService.getById(salesman.id).subscribe((data: any) => {
      obj = data;
      this.salemansItem = obj;
      setTimeout(() => {
        this.show = true;
      }, 1500);
    })
  }

  changeShowstatus($event: boolean) {
    this.show = $event;
  }

}
