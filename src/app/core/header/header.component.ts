import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'Enxenio';

  constructor() {}

  ngOnInit(): void {}
}
