import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../data/auth.service';

@Component({
  selector: 'ab-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'Enxenio';
  isLoggedIn = false;

  constructor(private auth: AuthService) {
    this.isLoggedIn = this.auth.isLoggedIn;
  }

  ngOnInit(): void {}
}
