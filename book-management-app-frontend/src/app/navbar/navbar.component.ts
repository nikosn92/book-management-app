
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router'; // Import RouterModule for routing

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule], // Add CommonModule and RouterModule here
})
export class NavbarComponent {
  constructor(private router: Router) { }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Check if the user is logged in
  }

  isAdmin(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;

    const payload = JSON.parse(atob(token.split('.')[1])); // Decode JWT
    return payload.role === 'admin';
  }

  logout(): void {
    localStorage.removeItem('token'); // Remove the token
    this.router.navigate(['/auth/login']); // Redirect to login
  }
}

