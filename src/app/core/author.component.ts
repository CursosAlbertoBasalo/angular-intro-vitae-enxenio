import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-author',
  template: ` <a href="https://twitter.com/albertobasalo">By Alberto Basalo</a> `,
  styles: [],
})
export class AuthorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
