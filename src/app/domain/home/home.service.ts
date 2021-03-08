import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Category } from 'src/app/core/models/category';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getCategories$() {
    const url = 'https://angularbuilders-pre.herokuapp.com/api/v1/categories';
    type ApiCategories = {
      data: Category[];
    };

    return this.http.get<ApiCategories>(url).pipe(map((response) => response.data));
  }

  getCategories() {
    return [
      { id: 'libraries', name: 'Libraries' },
      { id: 'courses', name: 'Courses' },
    ];
  }
}
