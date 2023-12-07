// course-upload.component.ts

import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-upload',
  templateUrl: './course-upload.component.html',
  styleUrls: ['./course-upload.component.css'],
  standalone: true,
  imports: [CommonModule,FormsModule],
})
export class CourseUploadComponent {
  course: any = {
    subjects: [
      {
        title: '',
        videos: [{ title: '', order: 1, file: null }],
      },
    ],
  };

  constructor(private courseService: CourseService) {}

  uploadCourse() {
    this.courseService.createCourse(this.course).subscribe(
      (response) => {
        console.log('Course uploaded successfully', response);
        // Optionally, you can navigate to a different page or reset the form
      },
      (error) => {
        console.error('Error uploading course', error);
      }
    );
  }

  addSubject() {
    this.course.subjects.push({
      title: '',
      videos: [{ title: '', order: 1, file: null }],
    });
  }

  addVideo(subjectIndex: number) {
    this.course.subjects[subjectIndex].videos.push({ title: '', order: 1, file: null });
  }

  removeVideo(subjectIndex: number, videoIndex: number) {
    this.course.subjects[subjectIndex].videos.splice(videoIndex, 1);
  }

  onVideoFileChange(event: any, subjectIndex: number, videoIndex: number) {
    const file = event.target.files[0];
    this.course.subjects[subjectIndex].videos[videoIndex].file = file;
  }
}