import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  getCategories() {
    return [
      { id: 'libraries', name: 'Libraries' },
      { id: 'courses', name: 'Courses' },
    ];
  }
}
