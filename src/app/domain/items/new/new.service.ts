import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiItem, Item } from 'src/app/core/models/item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewService {
  private endPoint = environment.apiUrl + '/items/';
  constructor(private http: HttpClient) {}
  postNewCategory$(item: Item) {
    return this.http.post<ApiItem>(this.endPoint, item).pipe(map((response) => response.data));
  }
}
