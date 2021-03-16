import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ab-page',
  templateUrl: './page.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent implements OnInit {
  @Input() pageTitle = '';

  constructor() {}

  ngOnInit(): void {}
}
