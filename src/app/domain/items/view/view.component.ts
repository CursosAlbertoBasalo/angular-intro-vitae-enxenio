import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/core/models/item';
import { ViewService } from './view.service';

@Component({
  selector: 'ab-view',
  templateUrl: './view.component.html',
  styles: [],
})
export class ViewComponent implements OnInit {
  item: Item;
  constructor(route: ActivatedRoute, private service: ViewService) {
    this.service.getItem$(route.snapshot.params.id).subscribe({
      next: (data) => (this.item = data),
    });
  }

  ngOnInit(): void {}
}
