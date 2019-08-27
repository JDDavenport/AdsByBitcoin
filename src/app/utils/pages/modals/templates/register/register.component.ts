import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AuthService } from '../../../../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-register',
  templateUrl: 'register.component.html',
  styleUrls: ['./styles/register.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterModalComponent {
  constructor(public auth: AuthService,
    private router: Router, public dialogRef: MatDialogRef<RegisterModalComponent>) {
      if(this.auth.isLoggedIn)
      {
        dialogRef.disableClose = true;
      }
     }
  async signInWithGoogle() {
    console.log("in modal register")
    await this.auth.googleLogin();
    this.dialogRef.disableClose = false;
    this.dialogRef.close();
    return await this.afterSignIn();
  }
  private afterSignIn() {
    console.log("in after sign in")

    // Do after login stuff here, such router redirects, toast messages, etc.
    return this.router.navigate(['/dashboard']);
  }
}
