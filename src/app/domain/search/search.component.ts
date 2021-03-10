import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router: Router, private route: ActivatedRoute, private service: SearchService) {}

  ngOnInit(): void {
    this.searchTerm = this.route.snapshot.queryParams.term;
  }

  search() {
    if (!this.searchTerm) {
      this.items = [];
    } else {
      this.service.getItemsBySearchTerm$(this.searchTerm).subscribe({
        next: (items) => (this.items = items),
      });
      this.router.navigate(['search'], { queryParams: { term: this.searchTerm } });
    }
  }
}
