import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/data/auth.service';
import { ActivateService } from './activate.service';

@Component({
  selector: 'ab-activate',
  templateUrl: './activate.component.html',
  styles: [],
})
export class ActivateComponent implements OnInit {
  uat = '';

  constructor(private service: ActivateService, private auth: AuthService) {}

  ngOnInit(): void {}

  onSend() {
    this.service.putActivation$(this.uat).subscribe({
      next: (results) => this.auth.setSessionToken(results['data']),
    });
  }
}
