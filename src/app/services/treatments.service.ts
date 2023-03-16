import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { find } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class TreatmentsService {

  constructor( private http: HttpClient) {

   }

   getCustomer(userIdSignned: string): Observable<User | undefined> {
    return this.http.get<User>(`http://localhost:3000/users/${userIdSignned}`)
    .pipe(
      find((response: User) => response.id === parseInt(userIdSignned)));
   }
}
