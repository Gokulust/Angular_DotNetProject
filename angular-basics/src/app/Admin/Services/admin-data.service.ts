import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  private apiUrl = 'http://localhost:5091/api/Product'; // Replace with your API URL
  constructor(private http: HttpClient) {}
  // Example GET request
  getSomeData(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

    //Example Delete request
    DeleteData(id:number):Observable<any>{
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        responseType: 'text' as 'json', // Set responseType to 'text'
      };
    
      return this.http.delete(`${this.apiUrl}/${id}`,options);
    }
    updateData(id: number, data: any): Observable<any> {
       var res=this.http.put(`${this.apiUrl}/${id}`, data);
       return res;
    }
    getDataById(id:number):Observable<any>
    {
      return this.http.get(`${this.apiUrl}/${id}`);
    }
}
