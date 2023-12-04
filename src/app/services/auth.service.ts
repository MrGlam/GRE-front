// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth'; // Replace with your backend authentication API URL

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {
    const isAuthenticated = localStorage.getItem('authenticated') === 'true';
    this.setAuthenticated(isAuthenticated);
  }
  private authenticatedSubject = new BehaviorSubject<boolean>(false);

  get isAuthenticated(): Observable<boolean> {
    return this.authenticatedSubject.asObservable();
  }

  setAuthenticated(value: boolean): void {
    this.authenticatedSubject.next(value);
    localStorage.setItem('authenticated', value.toString());
  }

  logout() {
    this.setAuthenticated(false);
  }

  private authNavigationSubjectSubject = new Subject<string>();

  authNavigationSubject$ = this.authNavigationSubjectSubject.asObservable();

  triggerFunction(data: string) {
    this.authNavigationSubjectSubject.next(data);
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
        this.setAuthenticated(true);
      }),
      catchError((error) => {
        // Handle login error
        this.loadingService.hideLoading();
        console.error('Login error:', error);
        throw error;
      })
    );
  }

  signup(fullName: string, email: string, password: string): Observable<any> {
    this.loadingService.showLoading();

    const signupData = { fullName, email, password };

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

  isAdmain() {
    console.log('enter is admin func');
    
    return this.http.get<any>(`${this.apiUrl}/check-admin`).pipe(
      
      tap((data) => {

        console.log(data);
        this.loadingService.hideLoading();
        return true
      }),
      catchError((error):any => {
        // Handle signup error
        this.loadingService.hideLoading();
        console.log(error);
        return false
      })
    );
  }

  // Add other authentication-related methods as needed
}
