import { AuthService } from './../../../shared/services/auth.service';
import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService){
    this.authService.isLoggedin.subscribe(val => {
      this.isLoggedIn = val;
    });
  }
}
