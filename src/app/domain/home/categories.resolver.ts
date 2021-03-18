import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/models/category';
import { HomeService } from './home.service';

@Injectable({
  providedIn: 'root',
})
export class CategoriesResolver implements Resolve<Category[]> {
  constructor(private service: HomeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category[]> {
    return this.service.getCategories$();
  }
}
