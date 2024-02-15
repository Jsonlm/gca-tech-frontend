import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesmansComponent } from './salesmans.component';

describe('SalesmansComponent', () => {
  let component: SalesmansComponent;
  let fixture: ComponentFixture<SalesmansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesmansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesmansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
