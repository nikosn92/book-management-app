import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AdminGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(): boolean {
        const token = localStorage.getItem('token');
        if (token) {
            const payload = JSON.parse(atob(token.split('.')[1]));
            if (payload.role === 'admin') {
                return true; // Allow access
            }
        }
        // Redirect to login if not admin
        this.router.navigate(['/auth/login']);
        return false;
    }
}
