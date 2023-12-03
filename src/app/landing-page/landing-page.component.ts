import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../services/toast.service';
import { CoursesComponent } from './courses/courses.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule,CoursesComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  constructor() {}

}
