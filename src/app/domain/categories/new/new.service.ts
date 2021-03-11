import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiCategory, Category } from 'src/app/core/models/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewService {
  private endPoint = environment.apiUrl + '/categories/';
  constructor(private http: HttpClient) {}
  postNewCategory$(category: Category) {
    return this.http.post<ApiCategory>(this.endPoint, category).pipe(map((response) => response.data));
  }
}
