import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ab-view',
  templateUrl: './view.component.html',
  styles: [],
})
export class ViewComponent implements OnInit {
  categoryId: string;

  constructor(route: ActivatedRoute) {
    this.categoryId = route.snapshot.params.id;
  }

  ngOnInit(): void {}
}
