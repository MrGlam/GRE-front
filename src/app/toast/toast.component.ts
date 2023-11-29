// toast.component.ts
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent implements OnDestroy {
  message: string | undefined;
  isVisible: boolean = false;
  private subscription: Subscription;

  constructor(private toastService: ToastService) {
    // Subscribe to changes in the toast message
    this.subscription = this.toastService.toastState.subscribe((message) => {
      console.log('a');
      
      this.message = message;

      // Show the toast only if there is a message
      this.isVisible = !!message;

      // You might want to add a delay or use Angular animations for a smoother effect
      // This example uses a simple approach for demonstration
      if (this.isVisible) {
        setTimeout(() => {
          this.isVisible = false;
          this.message = undefined;
        }, 3000); // Assuming you want to hide the toast after a certain delay (e.g., 5 seconds)
      }
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    this.subscription.unsubscribe();
  }
}
