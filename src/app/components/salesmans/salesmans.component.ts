import { Component } from '@angular/core';
import { SalesmanService } from '../../core/services/salesman.service';
import { Salesman } from '../../core/models/salesman.model.ts';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salesmans',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './salesmans.component.html',
  styleUrl: './salesmans.component.sass'
})
export class SalesmansComponent {

  public salesmans: Salesman[];
  public statusColorPalette = ['#00913f ', ' #FF0000'];

  constructor(
    readonly salesmanService: SalesmanService,
    private router: Router
  ) {
    this.salesmans = [];
  }

  ngOnInit(): void {
    this.salesmanService.getAll().subscribe((data: any) => {
      this.getPhotos(data);
      this.getLocationsArray(data);
      this.salesmans = data;
    });
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
}
