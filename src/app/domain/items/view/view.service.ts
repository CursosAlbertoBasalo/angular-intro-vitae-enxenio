import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiItem } from 'src/app/core/models/item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  private endPoint = environment.apiUrl + '/items/';
  constructor(private http: HttpClient) {}

  getItem$(itemId: string) {
    const url = this.endPoint + itemId;
    return this.http.get<ApiItem>(url).pipe(map((response) => response.data));
  }
}
