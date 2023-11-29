// toast.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { ToastService } from '../services/toast.service';

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule],
  exports: [ToastComponent],
  providers: [ToastService],
})
export class ToastModule {}

