import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private sessionToken = '';

  isLoggedIn = !!this.sessionToken;

  constructor() {
    this.sessionToken = localStorage.getItem('stk');
  }

  public setSessionToken(sessionToken: string) {
    this.sessionToken = sessionToken;
    localStorage.setItem('stk', sessionToken);
  }
  public getSessionToken() {
    return this.sessionToken;
  }
}
