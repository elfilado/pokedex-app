import { Injectable } from '@angular/core';
import { Observable, of, tap, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string;

  logIn(user: string, password: string): Observable<boolean> {
    const isLoggedIn = (user == 'youare' && password == 'incredible');

    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }

  logOut() {
    this.isLoggedIn = false;
  }

}
