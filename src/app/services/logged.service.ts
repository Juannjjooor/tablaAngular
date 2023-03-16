import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { User } from '../interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {

  constructor(private http: HttpClient,
              private router: Router) { 

  }

  purchaserExist(usuario: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:3000/users?user=${usuario}&password=${password}`)
    .pipe(
      map((response: User[]) => {
        return response;
      })
    )
  }

  logout() {
    localStorage.removeItem('userId');
    this.router.navigateByUrl('/login')
  }
}
