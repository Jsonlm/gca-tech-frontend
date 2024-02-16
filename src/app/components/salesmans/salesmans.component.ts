import { Component, EventEmitter, Output } from '@angular/core';
import { SalesmanService } from '../../core/services/salesman.service';
import { Salesman } from '../../core/models/salesman.model.ts';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SalesmanViewComponent } from '../shared/dialogs/salesman-view/salesman-view.component';

@Component({
  selector: 'app-salesmans',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SalesmanViewComponent
  ],
  templateUrl: './salesmans.component.html',
  styleUrl: './salesmans.component.sass'
})
export class SalesmansComponent {

  @Output() salesmansArray = new EventEmitter<string[]>();

  public salesmans: Salesman[];
  public statusColorPalette = ['#00913f','#FF0000'];
  public disabled: boolean = false;
  public show: boolean = false;
  public edit: boolean = true;

  constructor(
    readonly salesmanService: SalesmanService,
    private router: Router
  ) {
    this.salesmans = [];
  }

  ngOnInit(): void {
    this.salesmanService.getAll().subscribe((data: any) => {
      this.getPhotos(data);
     // this.getLocationsArray(data);
      this.salesmans = data;
      console.log(this.salesmans);
      this.salesmansArray.emit(data);
    });
  }

  changeShowstatus($event: boolean) {
    this.show = $event;
  }

  getPhotos(listToConvert: Salesman[]) {
    listToConvert.map((salesman: Salesman) => {
      salesman.photo = `/assets/${salesman.photo}`;
    });
  }

  getLocationsArray(locations: []) {
    this.navigateToPassData(locations)
  }

  navigateToPassData(coordinates: any[]) {
    this.router.navigate(['/home'], { queryParams: { array: JSON.stringify(coordinates) } });
  }

  showSalesmanForm() {
    this.show = true;
    this.disabled = false;
    this.edit = true;
  }

  /* ngOnDestroy(): void {
    this.salesmanService.getAll().subscribe().unsubscribe();    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  } */
}
