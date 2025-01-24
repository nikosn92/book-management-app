import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
})
export class EditBookComponent {
  bookId: string = '';
  bookData: any = { title: '', author: '', genre: '' }; // Placeholder for book details
  errorMessage: string = '';
  isUpdated: boolean = false;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.bookId = this.route.snapshot.paramMap.get('id') || '';
    console.log('EditBookComponent initialized with Book ID:', this.bookId);

    // Fetch book details
    this.bookService.getBookById(this.bookId).subscribe(
      (response) => {
        this.bookData = response;
        console.log('Book data fetched for editing:', this.bookData);
      },
      (error) => {
        console.error('Failed to fetch book data:', error);
        this.errorMessage = 'Failed to fetch book details. Please try again.';
      }
    );
  }

  onEditBook() {
    console.log(`Updating book with ID: ${this.bookId}`);
    this.bookService.updateBook(this.bookId, this.bookData).subscribe(
      (response) => {
        console.log('Book updated successfully:', response);
        this.isUpdated = true;
        setTimeout(() => this.router.navigate(['/books']), 2000); // Redirect to book list
      },
      (error) => {
        console.error('Failed to update book:', error);
        this.errorMessage = 'Failed to update the book. Please try again.';
      }
    );
  }
}
