import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiUrl = 'http://localhost:5091/api/Cart';
  constructor(private http:HttpClient) { }
  getSomeData(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
