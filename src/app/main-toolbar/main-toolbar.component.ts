import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-up/sign-up.component';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-main-toolbar',
  standalone: true,
  imports: [CommonModule,MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    ],
  templateUrl: './main-toolbar.component.html',
  styleUrl: './main-toolbar.component.css'
})
export class MainToolbarComponent {
  private subscription: Subscription;

  constructor(public dialog: MatDialog,public authService:AuthService) {
    this.subscription = this.authService.triggerFunction$.subscribe((data) => {
      if (data == "login"){
        this.openLoginDialog();
      }else {
        this.openSignInDialog()
      }
      
    });
  }

  openLoginDialog(): void {
    console.log('a');
    
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '300px',
      // You can customize other dialog options here
    });

    // You can subscribe to the afterClosed event to handle actions after the dialog is closed
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openSignInDialog(): void {
    const dialogRef = this.dialog.open(SignInComponent, {
      width: '300px',
      // You can customize other dialog options here
    });

    // You can subscribe to the afterClosed event to handle actions after the dialog is closed
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
