import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SalesmanService } from './core/services/salesman.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  providers: [
    SalesmanService
  ]
})
export class AppComponent {
  title = 'gca-tech-test';
}
