import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from 'src/app/core/models/item';
import { ViewService } from './view.service';

@Injectable({
  providedIn: 'root',
})
export class ItemResolver implements Resolve<Item> {
  constructor(private service: ViewService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item> {
    return this.service.getItem$(route.params.id);
  }
}
