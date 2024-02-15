import { Component } from '@angular/core';
import { MapLocationsComponent } from '../../map-locations/map-locations.component';
import { SalesmansComponent } from '../../salesmans/salesmans.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MapLocationsComponent, SalesmansComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {


  receivedArray: string[] = [];

  receiveData(data: string[]) {
    this.receivedArray = data;
  }

}
