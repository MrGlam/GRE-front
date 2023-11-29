import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(public dialogRef: MatDialogRef<LoginComponent>,private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe(
      () => {
        // Redirect to a secured route after successful login
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        // Handle login error, e.g., display an error message
        console.error('Login error:', error);
      }
    );
  }
}
