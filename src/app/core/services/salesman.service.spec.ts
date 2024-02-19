import { TestBed } from '@angular/core/testing';

import { SalesmanService } from './salesman.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Salesman } from '../models/salesman.model.ts';

describe('SalesmanService', () => {
  let http: HttpClient;
  let service: SalesmanService | any;
  

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SalesmanService]
    }).compileComponents();

    service = TestBed.inject(SalesmanService);
  });

  it('#should get all data', () => {
    expect(service.getAll().subscribe((data: Salesman[])=> {
      
      expect(Array.isArray(data)).toBeTrue();
      expect(data.length).toBeGreaterThan(0);
    })).toBeTruthy();
  });

  it('#should get data by Id', () => {
    expect(service.getById('002').subscribe((data: Salesman)=> {
      expect(Object(data)).toBeTrue();
      expect(data).toBeGreaterThan(2);
    })).toBeTruthy();
  });
});
