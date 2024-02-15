import { Routes } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { SalesmansComponent } from './components/salesmans/salesmans.component';
import { MapLocationsComponent } from './components/map-locations/map-locations.component';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: 'movie/:moviename', component: MovieInfoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'salesmans', component: SalesmansComponent },
  { path: 'map-locations', component: MapLocationsComponent },
];
