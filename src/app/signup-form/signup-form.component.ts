import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, Validators} from '@angular/forms';
import { UsernameValidators } from './username.validators';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  form = new FormGroup({
  // Nested FormGroup account : new FormGroup({
    // }),

    username : new FormControl(''),
      password : new FormControl('')
    });


  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  login() {
    this.form.setErrors({
      invalidLogin: true
     });
   }

  constructor() { }

  ngOnInit() {
  }

}
