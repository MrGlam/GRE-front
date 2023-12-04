// course.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://your-backend-api-url'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  uploadCourse(course: any): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('title', course.title);
    formData.append('description', course.description);
    formData.append('price', course.price.toString());

    // Loop through subjects and videos to append data
    for (const subject of course.subjects) {
      formData.append('subjects[]', JSON.stringify(subject));

      for (const video of subject.videos) {
        if (video.file) {
          formData.append('videos', video.file, video.file.name);
        }
      }
    }

    return this.http.post(`${this.apiUrl}/courses`, formData);
  }

  // Add other methods for fetching, updating, or deleting courses as needed

  // Example: Get list of all courses
  getAllCourses(): Observable<any> {
    return this.http.get(`${this.apiUrl}/courses`);
  }

  // Example: Get details of a specific course
  getCourseById(courseId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/courses/${courseId}`);
  }

  // Example: Update an existing course
  updateCourse(courseId: string, updatedCourse: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/courses/${courseId}`, updatedCourse);
  }

  // Example: Delete a course
  deleteCourse(courseId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/courses/${courseId}`);
  }
}
