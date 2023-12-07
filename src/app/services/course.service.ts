// course.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private baseUrl = 'http://localhost:3000/api/courses';

  constructor(private httpClient: HttpClient) {}

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
    return this.httpClient.post<any>(`${this.baseUrl}/create`, courseData);
  }

  updateCourse(courseId: string, courseData: any): Observable<any> {
    return this.httpClient.put<any>(`${this.baseUrl}/${courseId}`, courseData);
  }

  deleteCourse(courseId: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/${courseId}`);
  }
}
