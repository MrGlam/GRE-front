import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone:true,
  imports: [CommonModule],

  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  // Replace this with actual course data
  courses = [
    {
      title: 'Introduction to Angular',
      description: 'Learn the basics of Angular framework.',
      instructor: 'John Doe',
      price: 49.99
    },
    // {
    //   title: 'Introduction to Angular',
    //   description: 'Learn the basics of Angular framework.',
    //   instructor: 'John Doe',
    //   price: 49.99
    // },
    {
      title: 'Introduction to Angular',
      description: 'Learn the basics of Angular framework.',
      instructor: 'John Doe',
      price: 49.99
    },
    {
      title: 'Introduction to Angular',
      description: 'Learn the basics of Angular framework.',
      instructor: 'John Doe',
      price: 49.99
    },
    {
      title: 'Introduction to Angular',
      description: 'Learn the basics of Angular framework.',
      instructor: 'John Doe',
      price: 49.99
    },
    {
      title: 'Advanced JavaScript',
      description: 'Master advanced concepts in JavaScript programming.',
      instructor: 'Jane Smith',
      price: 69.99
    },
    // Add more courses as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
