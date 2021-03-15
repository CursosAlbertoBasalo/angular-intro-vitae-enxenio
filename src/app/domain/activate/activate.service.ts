import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ActivateService {
  private endPoint = environment.apiUrl + '/users/';

  constructor(private http: HttpClient) {}

  putActivation$(uat: string) {
    const url = `${this.endPoint}activations?uat=${uat}`;
    return this.http.put(url, {});
  }
}
