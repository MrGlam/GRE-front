import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToastService } from 'src/app/services/toast.service';
import { LoadingService } from 'src/app/services/loading.service';



@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SignInComponent {
  email: string = '';
  password: string = '';
  myForm: any;
  signUpForm: FormGroup;
  errorMessage = null



  constructor(private toastService: ToastService, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<SignInComponent>, private authService: AuthService, private router: Router, public LoadingService: LoadingService) {
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }

  openLogin():void{
    this.dialogRef.close();
    this.authService.triggerFunction("login");
  }

  signUp(): void {
    this.errorMessage = null
    if (this.signUpForm.valid) {
      // Form is valid, proceed with sign-up logic
      const email = this.signUpForm.value.email;
      const password = this.signUpForm.value.password;
      const fullName = this.signUpForm.value.name


      this.authService.signup(fullName,email, password).subscribe(
        (data) => {
          // Redirect to a secured route after successful login
          this.dialogRef.close();
          this.toastService.showToast(data.message);

        },
        (error) => {
          // Handle login error, e.g., display an error message
          this.errorMessage = error.message
          console.error('Sign Up error:', error);
        }
      );

      // Reset the form after submission
      this.signUpForm.reset();

    }
  }

}
