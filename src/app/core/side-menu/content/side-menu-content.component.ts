import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-side-menu-content',
  styleUrls: [
    './styles/side-menu-content.scss'
  ],
  templateUrl: './side-menu-content.component.html',
  encapsulation: ViewEncapsulation.None
})

export class SideMenuContentComponent {
constructor( public auth: AuthService){}
}
