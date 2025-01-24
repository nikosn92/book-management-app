import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule],
})
export class DeleteBookComponent {
  bookId: string = '';
  errorMessage: string = '';
  isDeleted: boolean = false;
  showConfirmation: boolean = false;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.bookId = this.route.snapshot.paramMap.get('id') || '';
    console.log('DeleteBookComponent initialized with Book ID:', this.bookId);
  }

  // Display confirmation prompt
  confirmDeletion() {
    console.log('Confirmation requested for book deletion');
    this.showConfirmation = true;
  }

  // Execute deletion after confirmation
  onDeleteBook() {
    if (!this.showConfirmation) {
      console.error('Delete attempted without confirmation');
      return;
    }

    console.log(`Deleting book with ID: ${this.bookId}`);
    this.bookService.deleteBook(this.bookId).subscribe(
      (response) => {
        console.log('Book deleted successfully:', response);
        this.isDeleted = true;
        setTimeout(() => this.router.navigate(['/books']), 2000);
      },
      (error) => {
        console.error('Failed to delete book:', error);
        this.errorMessage = 'Failed to delete the book. Please try again.';
      }
    );
  }
}
