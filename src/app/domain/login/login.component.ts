import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'ab-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  email = '';

  constructor(private service: LoginService, private router: Router) {}

  ngOnInit(): void {}

  onSend() {
    this.service.postCredentials$({ email: this.email }).subscribe({
      next: (response) => {
        console.log(response.data.atk);
        this.router.navigate(['/activate']);
      },
    });
  }
}
