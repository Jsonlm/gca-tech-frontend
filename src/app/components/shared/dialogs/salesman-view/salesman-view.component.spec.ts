import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesmanViewComponent } from './salesman-view.component';

describe('SalesmanViewComponent', () => {
  let component: SalesmanViewComponent;
  let fixture: ComponentFixture<SalesmanViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesmanViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesmanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
