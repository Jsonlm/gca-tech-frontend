import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salesman } from '../models/salesman.model.ts';

@Injectable({
  providedIn: 'root'
})
export class SalesmanService {

  public url: string = 'http://74.235.109.154/api';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Salesman> {
    return this.http.get<Salesman>(`${this.url}/salesman`)
  }
  
  getById(id: string): Observable<Salesman> {
    return this.http.get<Salesman>(`${this.url}/salesman/${id}`)
  }
  
  create(salesman: Salesman): Observable<Salesman> {
    return this.http.post<Salesman>(`${this.url}/salesman`, salesman)
  }
}
