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
  errorMessage: string;
  private service: HomeService;

  constructor(service: HomeService) {
    this.service = service;
    //this.categories = service.getCategories();
  }

  ngOnInit(): void {
    // this.service.getCategories$().subscribe(
    //   (result) => (this.categories = result),
    //   (error) => console.log(error)
    // );

    this.service.getCategories$().subscribe({
      next: (result) => (this.categories = result),
      error: (error) => (this.errorMessage = error.message),
    });
  }
}
