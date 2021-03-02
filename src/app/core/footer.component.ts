import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';

@Component({
  selector: 'ab-footer',
  template: `
    <footer>
      <ab-author></ab-author>
      CopyRight {{ year }}
    </footer>
  `,
  styles: [],
})
export class FooterComponent implements OnInit {
  public year: number;

  constructor(private service: FooterService) {}

  ngOnInit(): void {
    this.year = this.service.year;
  }
}
