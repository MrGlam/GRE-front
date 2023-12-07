import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminLandingPageComponent } from './admin-landing-page.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CourseUploadComponent } from './course-upload/course-upload.component';
import { CoursesStatisticsComponent } from './courses-statistics/courses-statistics.component';
import { AdminToolbarComponent } from './admin-toolbar/admin-toolbar.component';

const AdminRoutes: Routes = [
  {
    path: '',
    component: AdminLandingPageComponent,
    children: [
      { path: 'upload-form', component: CourseUploadComponent },
      { path: 'courses-statistics', component: CoursesStatisticsComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AdminLandingPageComponent,
    
  ],
  imports: [
    CourseUploadComponent,
    CoursesStatisticsComponent,
    AdminToolbarComponent,
    CommonModule,
    MatInputModule,
    FormsModule,
    RouterModule.forChild(AdminRoutes),
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminLandingPageModule {}
