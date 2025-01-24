import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class LoginComponent implements OnInit {
  email: string = ''; // User input for email
  password: string = ''; // User input for password
  errorMessage: string = ''; // Error message display

  constructor(private authService: AuthService, private router: Router) {
    console.log('LoginComponent initialized');
    console.log('AuthService:', this.authService);
  }

  ngOnInit() {
    console.log('LoginComponent is ready for user interactions.');
  }

  onLogin() {
    console.log('onLogin called with:', { email: this.email, password: this.password });

    this.authService.login({ email: this.email, password: this.password }).subscribe(
      (response) => {
        console.log('Login successful:', response);
        // Store the JWT token securely
        localStorage.setItem('token', response.token);
        this.errorMessage = '';
        // Redirect the user to the books page
        this.router.navigate(['/books']);
      },
      (error) => {
        console.error('Login failed:', error);
        this.errorMessage = 'Invalid email or password';
      }
    );
  }
}
