import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  constructor(private toastService: ToastService) {}

  showExampleToast(): void {
    this.toastService.showToast('This is an example toast from ExampleComponent.');
  }
}
