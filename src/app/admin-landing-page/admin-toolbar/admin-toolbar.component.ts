import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-toolbar',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatToolbarModule],
  templateUrl: './admin-toolbar.component.html',
  styleUrl: './admin-toolbar.component.css',
})
export class AdminToolbarComponent {
  constructor(private router: Router) {}

  navigateToRoute(route: string): void {
    this.router.navigate(['/admin', route]);
  }
}
