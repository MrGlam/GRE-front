// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth'; // Replace with your backend authentication API URL

  constructor(private http: HttpClient,private loadingService: LoadingService) {}

  login(email: string, password: string): Observable<any> {
    this.loadingService.showLoading();

    const loginData = { email, password };

    return this.http.post<any>(`${this.apiUrl}/login`, loginData).pipe(
      tap((response) => {
        // Handle successful login, e.g., store token in localStorage
        localStorage.setItem('token', response.token);
        localStorage.setItem('tokenExpiration', response.expiresIn);
      }),
      catchError((error) => {
        // Handle login error
        console.error('Login error:', error);
        throw error;
      })
    );
  }

  signup(email: string, password: string): Observable<any> {
    this.loadingService.showLoading();

    const signupData = { email, password };

    return this.http.post<any>(`${this.apiUrl}/register`, signupData).pipe( 
      tap((data) => {
        console.log(data);
      }),
      catchError((error) => {
        // Handle signup error
        console.error('Signup error:', error);
        throw error;
      })
    );
  }

  // Add other authentication-related methods as needed
}