import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { NavbarComponent } from './navbar/navbar.component'; // Import NavbarComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, HttpClientModule, NavbarComponent], // Include HttpClientModule here
})
export class AppComponent {
  title = 'book-management-app-frontend';
  constructor() {
    console.log('AppComponent initialized');
  }

  ngOnInit() {
    console.log('HttpClientModule should now be available globally.');
  }
}
