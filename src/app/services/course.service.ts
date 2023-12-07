// course.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private baseUrl = 'http://localhost:3000/courses';

  constructor(private httpClient: HttpClient,private authService:AuthService) {}

  getAllCourses(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}`);
  }

  getCourseById(courseId: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${courseId}`);
  }

  enrollUserInCourse(courseId: string): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/${courseId}/enroll`, {});
  }

  createCourse(courseData: any): Observable<any> {
    const token = this.authService.getToken();
    
    if (!token) {
      // Handle the case where the token is not available
      console.error('Token not available');
      return new Observable(); // Or handle this case as appropriate for your application
    }

    // Set the token in the request headers
    const headers = new HttpHeaders({
      Authorization: `${token}`,
    });

    // Make the request with the headers
    return this.httpClient.post<any>(`${this.baseUrl}/create`, courseData, { headers });
  }

  updateCourse(courseId: string, courseData: any): Observable<any> {
    return this.httpClient.put<any>(`${this.baseUrl}/${courseId}`, courseData);
  }

  deleteCourse(courseId: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/${courseId}`);
  }
}
