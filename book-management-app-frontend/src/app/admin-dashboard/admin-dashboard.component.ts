import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  standalone: true,
  imports: [CommonModule], // Include CommonModule for *ngFor
})
export class AdminDashboardComponent implements OnInit {
  users: any[] = [];
  books: any[] = [];
  loading: boolean = true; // Add a loading flag
  errorMessage: string = '';

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.fetchUsers();
    this.fetchBooks();
  }

  fetchUsers() {
    this.loading = true; // Start loading
    this.adminService.getAllUsers().subscribe(
      (response) => {
        this.users = response;
        this.loading = false; // Stop loading
      },
      (error) => {
        this.errorMessage = 'Failed to fetch users.';
        this.loading = false; // Stop loading
      }
    );
  }

  fetchBooks() {
    this.loading = true; // Start loading
    this.adminService.getAllBooks().subscribe(
      (response) => {
        this.books = response;
        this.loading = false; // Stop loading
      },
      (error) => {
        this.errorMessage = 'Failed to fetch books.';
        this.loading = false; // Stop loading
      }
    );
  }
}
