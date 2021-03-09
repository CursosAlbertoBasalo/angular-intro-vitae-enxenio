import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewService } from './view.service';

@Component({
  selector: 'ab-view',
  templateUrl: './view.component.html',
  styles: [],
})
export class ViewComponent implements OnInit {
  categoryId: string;
  category: any;
  errorMessage: string;

  constructor(route: ActivatedRoute, private service: ViewService) {
    this.categoryId = route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.service.getCategoryById$(this.categoryId).subscribe({
      next: (result) => (this.category = result),
      error: (error) => (this.errorMessage = error.message),
    });
  }
}
