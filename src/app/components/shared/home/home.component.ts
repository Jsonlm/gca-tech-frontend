import { Component, Input } from '@angular/core';
import { MapLocationsComponent } from '../../map-locations/map-locations.component';
import { SalesmansComponent } from '../../salesmans/salesmans.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { SalesmanViewComponent } from '../dialogs/salesman-view/salesman-view.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MapLocationsComponent, SalesmansComponent, NavbarComponent, CommonModule, ReactiveFormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

  @Input() showDialog: boolean = false;
  selectedSalesman: any;

  handleSalesmanSelected(salesman: any) {
    this.selectedSalesman = salesman;
  }

  receivedArray: string[] = [];

  receiveData(data: string[]) {
    this.receivedArray = data;
  }

  ngOnInit(): void {
  }

  receiveItem(data: Object) {
    console.log(data);
    
  }

}
