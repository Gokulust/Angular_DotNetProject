import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {

  private refreshStudentDetails = new BehaviorSubject<boolean>(false);
  refreshStudentDetails$ = this.refreshStudentDetails.asObservable();

  triggerRefresh() {
    this.refreshStudentDetails.next(true);
  }

  constructor() { }
}
