import { Component, EventEmitter, Output } from '@angular/core';
import { SalesmanService } from '../../core/services/salesman.service';
import { Salesman } from '../../core/models/salesman.model.ts';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SalesmanViewComponent } from '../shared/dialogs/salesman-view/salesman-view.component';
import { Subscription, interval, switchMap } from 'rxjs';

@Component({
  selector: 'app-salesmans',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SalesmanViewComponent,
  ],
  templateUrl: './salesmans.component.html',
  styleUrl: './salesmans.component.sass',
})
export class SalesmansComponent {
  @Output() salesmansArray = new EventEmitter<string[]>();

  public salesmans: Salesman[];
  public statusColorPalette = ['#00913f', '#FF0000'];
  public disabled: boolean = false;
  public show: boolean = false;
  public edit: boolean = true;
  private subscription: Subscription;

  constructor(
    readonly salesmanService: SalesmanService,
    private router: Router
  ) {
    this.salesmans = [];
    this.subscription = interval(10000)
      .pipe(switchMap(() => this.salesmanService.getAll()))
      .subscribe((data: any) => {
        this.getPhotos(data);
        this.salesmans = data;
        this.salesmansArray.emit(data);
      });
  }

  ngOnInit(): void {
    this.salesmanService.getAll().subscribe((data: any) => {
      this.getPhotos(data);
      this.salesmans = data;
      this.salesmansArray.emit(data);
    });
  }

  changeShowstatus($event: boolean) {
    this.show = $event;
  }

  getPhotos(listToConvert: Salesman[]) {
    listToConvert.map((salesman: Salesman) => {
      console.log(salesman);
      
      if (salesman.address === '') {
        salesman.address = 'No reporta';
      }
      if (salesman.name === '') {
        salesman.name = 'No reporta';
      }
      if (salesman.category === '') {
        salesman.category = 'No reporta';
      }

      if (salesman.photo.startsWith('persona')) {
        salesman.photo = `/assets/${salesman.photo}`;
      } else {
        salesman.photo = `/assets/persona1`;
      }

      if (
        salesman.vehicle === 'ambulancia' ||
        salesman.vehicle === 'carro'      ||
        salesman.vehicle === 'grua'       ||
        salesman.vehicle === 'moto'       ||
        salesman.vehicle === 'sinvehiculo'||
        salesman.vehicle === 'pin1'       ||
        salesman.vehicle === 'pin2'       ||
        salesman.vehicle === 'pin3'       ||
        salesman.vehicle === 'pin4'       ||
        salesman.vehicle === 'pin10'      ||
        salesman.vehicle === 'sinvehiculo'
      ) {
        salesman.vehicle = salesman.vehicle;
      } else {
        salesman.vehicle = 'sinvehiculo';
      }
    });
  }

  showSalesmanForm() {
    this.show = true;
    this.disabled = false;
    this.edit = true;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
