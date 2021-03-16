import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private sessionToken = '';

  private readonly isLoggedIn$ = new BehaviorSubject(false);

  public getIsLoggedIn$() {
    return this.isLoggedIn$.asObservable();
  }

  constructor() {
    this.saveSessionToken(localStorage.getItem('stk'));
  }

  public setSessionToken(sessionToken: string) {
    this.saveSessionToken(sessionToken);
    localStorage.setItem('stk', sessionToken);
  }

  private saveSessionToken(sessionToken: string) {
    this.sessionToken = sessionToken;
    this.isLoggedIn$.next(!!this.sessionToken);
  }

  public getSessionToken() {
    return this.sessionToken;
  }
}
