import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookFormComponent } from './books/book-form/book-form.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent }, // Login route
  { path: 'auth/register', component: RegisterComponent }, // Register route
  { path: 'books', component: BookListComponent }, // List all books
  { path: 'books/add', component: BookFormComponent }, // Add a new book
  { path: 'books/:id', component: BookDetailsComponent }, // View book details
  { path: 'books/:id/edit', component: BookFormComponent }, // Edit a book
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: 'auth/login' }, // Wildcard route for invalid paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Initialize routing with the defined routes
  exports: [RouterModule], // Export RouterModule to use in other modules
})
export class AppRoutingModule { }
