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

  constructor(private route: ActivatedRoute, private service: ViewService) {
    this.item = route.snapshot.data.item;
  }

  ngOnInit(): void {
    //this.getDataFromParameter();
  }

  // private getDataFromParameter() {
  //   this.service.getItem$(this.route.snapshot.params.id).subscribe({
  //     next: (data) => (this.item = data),
  //   });
  // }
}
