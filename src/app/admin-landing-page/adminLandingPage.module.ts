// dashboard.module.ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminLandingPageComponent } from './admin-landing-page.component'; // Update the import
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CourseUploadComponent } from './course-upload/course-upload.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLandingPageComponent, // Update the component reference
  },
];

@NgModule({
  declarations:[],
  imports: [CommonModule,MatInputModule,FormsModule, RouterModule.forChild(routes)],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

  
})
export class AdminLandingPageModule {}
