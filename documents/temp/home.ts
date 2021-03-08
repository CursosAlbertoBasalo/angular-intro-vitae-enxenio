import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .first {
        background: red;
      }

      .empty {
        color: #ccc;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  titles = ['Categories', 'Featured items'];
  categories = [{ name: 'Libraries' }, { name: 'Courses' }];
  items = [];

  public company: string = 'enxenio';
  public city: string = 'coruña';

  constructor() {}

  ngOnInit(): void {}

  getCategoriesTitleClass() {
    return {
      first: true,
      empty: this.categories.length == 0,
    };
  }

  getItemsTitleClass() {
    return {
      first: false,
      empty: this.items.length == 0,
    };
  }

  setCompany(value) {
    this.company = value;
  }
}
