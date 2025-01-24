import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor
import { RouterModule } from '@angular/router'; // Import RouterModule for navigation
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule], // Include CommonModule and RouterModule
})
export class BookListComponent implements OnInit {
  books: any[] = []; // Array to store books

  constructor(private bookService: BookService) { }

  ngOnInit() {
    console.log('Fetching books...');
    this.bookService.getBooks().subscribe(
      (response) => {
        this.books = response;
        console.log('Books fetched:', this.books);
      },
      (error) => {
        console.error('Failed to fetch books:', error);
      }
    );
  }

  onDeleteBook(bookId: string) {
    console.log('Deleting book with ID:', bookId);
    this.bookService.deleteBook(bookId).subscribe(
      (response) => {
        console.log('Book deleted successfully:', response);
        // Remove the deleted book from the local list
        this.books = this.books.filter((book) => book._id !== bookId);
      },
      (error) => {
        console.error('Failed to delete book:', error);
      }
    );
  }
}
