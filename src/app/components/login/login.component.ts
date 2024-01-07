import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../../shared/services/auth.service';
import { User } from '../../../shared/interfaces/User';
import { Router } from '@angular/router';

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

  constructor(private authService: AuthService, private router: Router){

  }

  handleSubmit () {
    this.submitted = true;
    // alert('email => ' + this.email + "\npassword => " + this.password);
    console.log('email => ' + this.email + "\npassword => " + this.password);

    this.authService.authenticate(this.email, this.password)
    .then((result:User[]) => {
      console.log(result);
      const user = result.find((item: User) => item.username === this.email);
      if (user != undefined) {
        if(user.password === this.password){
          alert('login success');
          localStorage.setItem('user', JSON.stringify(user));
          console.log(user);
          this.router.navigate(['/profile'])
        } else {
          alert('Invalid password');
        }
      } else {
        alert('No such user found');
      }
    }).catch(error => {
      console.error(error);
    });
  }

}
