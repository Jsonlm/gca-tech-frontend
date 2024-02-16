import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salesman } from '../models/salesman.model.ts';

const headers= new HttpHeaders()
.set('Access-Control-Allow-Headers', 'X-API-KEY,Origin,X-Requested-With,Content-Type,x-access-token,authorization,Authorization,Accept,Access-Control-Request-Method,token, application/json' )
.set('Access-Control-Allow-Origin', 'http://74.235.109.154/api/salesman')
.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

@Injectable({
  providedIn: 'root'
})
export class SalesmanService {

  public url: string = 'http://74.235.109.154/api';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Salesman> {
    return this.http.get<Salesman>(`${this.url}/salesman`, {headers: headers})
  }
  
  getById(id: string): Observable<Salesman> {
    return this.http.get<Salesman>(`${this.url}/salesman/${id}`, {headers: headers})
  }
  
  create(salesman: Salesman): Observable<Salesman> {
    return this.http.post<Salesman>(`${this.url}/salesman`, salesman , {headers: headers})
  }
}
