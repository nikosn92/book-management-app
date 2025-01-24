import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onRegister() {
    console.log('Attempting registration with:', {
      username: this.username,
      email: this.email,
      password: this.password,
    });

    this.authService.register({ username: this.username, email: this.email, password: this.password }).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        this.errorMessage = '';
        this.router.navigate(['/auth/login']); // Redirect to login after successful registration
      },
      (error) => {
        console.error('Registration failed:', error);
        this.errorMessage = error.error?.message || 'Registration failed. Please try again.';
      }
    );
  }
}
