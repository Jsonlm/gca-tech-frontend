import { Component } from '@angular/core';
import { MapLocationsComponent } from '../../map-locations/map-locations.component';
import { SalesmansComponent } from '../../salesmans/salesmans.component';
import { SalesmanService } from '../../../core/services/salesman.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MapLocationsComponent, SalesmansComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

}
