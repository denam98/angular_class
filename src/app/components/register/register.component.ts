import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(){}

  myRegFrom = new FormGroup({
    firstName: new FormControl('Your first name'),
    lastName: new FormControl('Your last name'),
    nic: new FormControl('NIC No'),
    gender: new FormControl('')
  })

  handleSubmit(){
    console.log('submitted');
    console.log(this.myRegFrom.value);
  }
}
