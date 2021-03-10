import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/core/models/item';
import { SearchService } from './search.service';

@Component({
  selector: 'ab-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  items: Item[];

  constructor(private service: SearchService) {}

  ngOnInit(): void {}

  search() {
    console.log('buscado ... ' + this.searchTerm);
    this.service.getItemsBySearchTerm$(this.searchTerm).subscribe({
      next: (items) => (this.items = items),
    });
  }
}
