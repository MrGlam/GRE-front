import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule,Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LoadingService } from 'src/app/services/loading.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule, MatProgressSpinnerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  public errorMessage = null
  loginForm: FormGroup;

  
  constructor(public LoadingService:LoadingService,private formBuilder: FormBuilder, public dialogRef: MatDialogRef<LoginComponent>,private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }
  openSignup():void {
    this.dialogRef.close()
    this.authService.triggerFunction("signUp")
  }
  login(): void {
    this.errorMessage = null

    this.authService.login(this.email, this.password).subscribe(
      () => {
        // Redirect to a secured route after successful login
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        // Handle login error, e.g., display an error message
        this.errorMessage = error.message
        console.error('Login error:', error);
      }
    );
  }
}
