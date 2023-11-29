// dashboard.module.ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page.component'; // Update the import

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent, // Update the component reference
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

  
})
export class LandingPageModule {}
