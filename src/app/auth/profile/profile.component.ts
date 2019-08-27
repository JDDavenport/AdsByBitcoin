import { Component } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html'
  // styleUrls: ['./user-profile.component.scss'],
})
export class ProfileComponent {

  constructor(public auth: AuthService) { }

  logout() {
    this.auth.signOut();
  }
}