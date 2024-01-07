import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

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

  constructor(){

  }

  handleSubmit () {
    this.submitted = true;
    // alert('email => ' + this.email + "\npassword => " + this.password);
    console.log('email => ' + this.email + "\npassword => " + this.password);
  }
}
