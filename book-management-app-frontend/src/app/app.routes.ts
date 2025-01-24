import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookFormComponent } from './books/book-form/book-form.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { DeleteBookComponent } from './books/delete-book/delete-book.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './auth/admin.guard';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'auth/login', component: LoginComponent },
    { path: 'auth/register', component: RegisterComponent },
    { path: 'books/add', component: AddBookComponent },
    { path: 'books/delete/:id', component: DeleteBookComponent },
    { path: 'books/edit/:id', component: EditBookComponent },
    { path: 'books', component: BookListComponent },
    { path: 'books/add', component: BookFormComponent },
    { path: 'books/:id', component: BookDetailsComponent },
    { path: 'books/:id/edit', component: BookFormComponent },
    { path: '', component: HomeComponent },
    { path: 'admin', component: AdminDashboardComponent, canActivate: [AdminGuard] },
    { path: '**', redirectTo: '' },
    { path: 'admin', component: AdminDashboardComponent },
];
