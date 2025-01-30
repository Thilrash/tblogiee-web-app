import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';


  constructor(private router: Router) {}

  navigateToHome() {
    const emailEntry = 'admin@tblogiee.com';
    const passwordEntry = 'admin@123';

    if (emailEntry === this.email.trim() && passwordEntry === this.password.trim()) {
      this.router.navigate(['/home']);
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
