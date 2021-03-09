import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiCategories } from 'src/app/core/models/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private endPoint = environment.apiUrl + '/categories';

  constructor(private http: HttpClient) {}

  getCategories$() {
    const url = this.endPoint;
    return this.http.get<ApiCategories>(url).pipe(map((response) => response.data));
  }

  getCategories() {
    return [
      { id: 'libraries', name: 'Libraries' },
      { id: 'courses', name: 'Courses' },
    ];
  }
}
