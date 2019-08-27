import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { LoginModalComponent } from './templates/login/login.component';
import { RegisterModalComponent } from './templates/register/register.component';

@Component({
  selector: 'app-modals-page',
  templateUrl: './modals.component.html',
  styleUrls: ['./styles/modals.scss']
})
export class ModalsPageComponent {
  selectedOption: string;

  constructor(public dialog: MatDialog) {}

  registerModal(): void {
    const dialogRef = this.dialog.open(RegisterModalComponent);
  }
  ngOnInit(): void {
    console.log('in MODALS')
    const dialogRef = this.dialog.open(RegisterModalComponent);

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  loginModal(): void {
    const dialogRef = this.dialog.open(LoginModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }
}
