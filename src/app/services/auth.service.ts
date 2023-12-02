// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth'; // Replace with your backend authentication API URL
  
  constructor(private http: HttpClient,private loadingService: LoadingService) {}

  private triggerFunctionSubject = new Subject<string>();

  triggerFunction$ = this.triggerFunctionSubject.asObservable();

  triggerFunction(data:string) {
    this.triggerFunctionSubject.next(data);
  }

  login(email: string, password: string): Observable<any> {
    this.loadingService.showLoading();

    const loginData = { email, password };

    return this.http.post<any>(`${this.apiUrl}/login`, loginData).pipe(
      tap((response) => {
        // Handle successful login, e.g., store token in localStorage
        localStorage.setItem('token', response.token);
        localStorage.setItem('tokenExpiration', response.expiresIn);
        this.loadingService.hideLoading();
      }),
      catchError((error) => {
        // Handle login error
        this.loadingService.hideLoading();
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
        this.loadingService.hideLoading();
      }),
      catchError((error) => {
        // Handle signup error
        this.loadingService.hideLoading();
        console.error('Signup error:', error);
        throw error;
      })
    );
  }

  // Add other authentication-related methods as needed
}
