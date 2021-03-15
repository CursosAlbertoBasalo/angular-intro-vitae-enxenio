import { Component, OnInit } from '@angular/core';
import { FooterService } from '../data/footer.service';

@Component({
  selector: 'ab-footer',
  template: `
    <footer>
      <ab-author></ab-author>
      CopyRight {{ year }}
      <a routerLink="about">About us</a>
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
