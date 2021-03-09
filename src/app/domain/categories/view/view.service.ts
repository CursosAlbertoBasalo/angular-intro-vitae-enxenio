import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiCategory } from 'src/app/core/models/category';
import { ApiItems } from 'src/app/core/models/item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  private endPoint = environment.apiUrl + '/categories/';
  constructor(private http: HttpClient) {}

  getCategoryById$(categoryId: string) {
    const url = this.endPoint + categoryId;
    return this.http.get<ApiCategory>(url).pipe(map((response) => response.data));
  }

  getCategoryItemsById$(categoryId: string) {
    const url = this.endPoint + categoryId + '/items';
    return this.http.get<ApiItems>(url).pipe(map((response) => response.data));
  }
}
