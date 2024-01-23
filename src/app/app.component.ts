import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'restorent-system';

  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.isLoggedin.subscribe((val) => {
      this.isLoggedIn = val;
    });
  }

  handleLogout(){
    this.authService.logOut();
  }
}
