import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiItems, Item } from 'src/app/core/models/item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private endPoint = environment.apiUrl + '/items/';
  constructor(private http: HttpClient) {}

  getItemsBySearchTerm$(searchTerm: string) {
    const url = this.endPoint;
    return this.http.get<ApiItems>(url).pipe(
      map((response) => response.data),
      map((items) => this.filterBySearchTerm(items, searchTerm))
    );
  }

  private filterBySearchTerm(items: Item[], searchTerm: string) {
    return items.filter((item) => this.bySearchTerm(item, searchTerm));
  }

  private bySearchTerm(item: Item, searchTerm: string) {
    const term = searchTerm.trim().toLowerCase();
    return item.name.toLowerCase().includes(term) || item.description.toLowerCase().includes(term);
  }
}
