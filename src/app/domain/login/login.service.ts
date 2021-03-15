import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private endPoint = environment.apiUrl + '/users/';

  constructor(private http: HttpClient) {}

  postCredentials$(credentials: any) {
    return this.http.post<any>(this.endPoint, credentials);
  }
}
