import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  year = new Date().getFullYear();

  constructor() {}
}
