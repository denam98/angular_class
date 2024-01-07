import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AuthService, User } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  headding: string = 'Sign in';
  submitted: boolean = false;
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService){

  }

  handleSubmit () {
    this.submitted = true;
    // alert('email => ' + this.email + "\npassword => " + this.password);
    console.log('email => ' + this.email + "\npassword => " + this.password);

    this.authService.auth().then(result => {
      const user: User| undefined = result.find((element) => element.username == this.email);
      if (user) {
        if (user.password === this.password) {
          alert('Loggin successfull');
          console.log(user);
          localStorage.setItem('user', JSON.stringify(user));
        } else {
          alert('Invalid password');
        }
      } else {
        alert('No such user');
      }
    });
  }
}
