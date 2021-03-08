import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  categories = [{ name: 'Libraries' }, { name: 'Courses' }];

  constructor() {}

  ngOnInit(): void {}
}
