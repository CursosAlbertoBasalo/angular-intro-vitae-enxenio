import { Component, OnInit } from '@angular/core';
import { ActivateService } from './activate.service';

@Component({
  selector: 'ab-activate',
  templateUrl: './activate.component.html',
  styles: [],
})
export class ActivateComponent implements OnInit {
  uat = '';

  constructor(private service: ActivateService) {}

  ngOnInit(): void {}

  onSend() {
    this.service.putActivation$(this.uat).subscribe({
      next: (data) => console.log(data),
    });
  }
}
