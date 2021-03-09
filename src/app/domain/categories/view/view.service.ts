import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  constructor(private http: HttpClient) {}

  getCategoryById$(categoryId: string) {
    const url = 'https://angularbuilders-pre.herokuapp.com/api/v1/categories/' + categoryId;

    return this.http.get<{ data: any }>(url).pipe(map((response) => response.data));
  }
}
