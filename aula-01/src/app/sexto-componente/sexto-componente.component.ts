import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sexto-componente',
  templateUrl: './sexto-componente.component.html',
  styleUrls: ['./sexto-componente.component.css']
})
export class SextoComponenteComponent {
  constructor(private authService: AuthService) {}

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
