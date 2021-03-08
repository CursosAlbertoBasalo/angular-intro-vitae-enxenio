import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category';
import { HomeService } from './home.service';

@Component({
  selector: 'ab-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  categories: Category[];

  constructor(service: HomeService) {
    this.categories = service.getCategories();
  }

  ngOnInit(): void {}
}
