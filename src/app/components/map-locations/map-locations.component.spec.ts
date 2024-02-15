import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLocationsComponent } from './map-locations.component';

describe('MapLocationsComponent', () => {
  let component: MapLocationsComponent;
  let fixture: ComponentFixture<MapLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapLocationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
