import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  //   gender: new FormControl(''),
  //   address: new FormGroup({
  //     no: new FormControl('Home No'),
  //     street: new FormControl('Street'),
  //     zone: new FormControl('Zone'),
  //   })
  // })

  myRegForm = this.formBuilder.group({
    firstName: ['First name', Validators.required],
    lastName: ['Last name', Validators.required],
    gender: [, Validators.required],
    nic: ['NIC No', [Validators.required, Validators.pattern('^([0-9]{9}[x|X|v|V]|[0-9]{12})$')]],
  })

  handleSubmit(){
    console.log('submitted');
    console.log(this.myRegForm.value);
  }
}
