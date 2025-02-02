import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor() { }

  onSubmit() {
    if (this.email && this.password) {
      // Logic for authentication goes here
      console.log('Email:', this.email);
      console.log('Password:', this.password);
    }
  }
}
