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
    const term = searchTerm.toLocaleLowerCase();
    return this.http.get<ApiItems>(url).pipe(
      map((response) => response.data),
      map((items) => this.filterBySearchTerm(items, term))
    );
  }

  private filterBySearchTerm(items: Item[], term: string) {
    return items.filter((item) => this.byTerm(item, term));
  }

  private byTerm(item: any, term: string) {
    if (item.name.toLocaleLowerCase().includes(term)) return true;
    if (item.description?.toLocaleLowerCase().includes(term)) return true;
    return false;
  }
}
