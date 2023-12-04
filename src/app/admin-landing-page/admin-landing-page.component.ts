import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseUploadComponent } from './course-upload/course-upload.component';

@Component({
  selector: 'app-admin-landing-page',
  standalone: true,
  imports: [CommonModule,CourseUploadComponent],
  templateUrl: './admin-landing-page.component.html',
  styleUrl: './admin-landing-page.component.css'
})
export class AdminLandingPageComponent {

}
