import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class AddBookComponent {
  title: string = '';
  author: string = '';
  genre: string = '';
  errorMessage: string = '';

  constructor(private bookService: BookService, private router: Router) { }

  onAddBook() {
    console.log('Adding book:', { title: this.title, author: this.author, genre: this.genre });

    this.bookService.addBook({ title: this.title, author: this.author, genre: this.genre }).subscribe(
      (response) => {
        console.log('Book added successfully:', response);
        this.errorMessage = '';
        this.router.navigate(['/books']); // Redirect to the book list
      },
      (error) => {
        console.error('Failed to add book:', error);
        this.errorMessage = error.error?.message || 'Failed to add book. Please try again.';
      }
    );
  }
}
