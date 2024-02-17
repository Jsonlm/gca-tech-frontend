import { TestBed } from '@angular/core/testing';

import { SalesmanService } from './salesman.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('SalesmanService', () => {
  let http: HttpClient;
  let service: SalesmanService | any;
  

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SalesmanService]
    }).compileComponents();
  });

  it('#should be get all data', () => {
    expect(service.getAll().subscribe((data: any)=> {
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBeTrue();
      expect(data.length).toBeGreaterThan(0);
    })).toBeTruthy();
  });
});
