import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private formBuilder: FormBuilder){}

  // myRegFrom = new FormGroup({
  //   firstName: new FormControl('Your first name'),
  //   lastName: new FormControl('Your last name'),
  //   nic: new FormControl('NIC No'),
  //   gender: new FormControl('')
  // })

  myRegForm = this.formBuilder.group({
    firstName: ['First name'],
    lastName: ['Last name'],
    gender: ['Gender'],
    nic: ['NIC No']
  })

  handleSubmit(){
    console.log('submitted');
    console.log(this.myRegForm.value);
  }
}
