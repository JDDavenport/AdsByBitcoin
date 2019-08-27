import { AfterContentInit, Component, ViewChild, ViewEncapsulation, PLATFORM_ID, Inject } from '@angular/core';
import { MessagesMenuService, NotificationsMenuService, SideMenuService } from './core';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './styles/app.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterContentInit {
  @ViewChild('drawerContainer') drawerContainer;
  @ViewChild('sideMenu') sideMenu;
  @ViewChild('sideNotifications') sideNotifications;

  notifications = [];
  messages = [];
  open_menu = false;

  constructor(
    private sideMenuService: SideMenuService,
    private notificationsMenuService: NotificationsMenuService,
    private messagesMenuService: MessagesMenuService, public auth: AuthService, private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    notificationsMenuService.getNotifications().then((notifications: any) => {
      this.notifications = notifications;
    });
    messagesMenuService.getMessages().then((messages: any) => {
      this.messages = messages;
    });
  }
ngOnInit(): void {
  console.log("in onit")
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  if(this.auth.isLoggedIn()){
    this.router.navigate(['/dashboard']);
  }
  else{
  console.log('not loggedIn')
  }
}

  ngAfterContentInit(): void {
    this.sideMenuService.sidenav = this.sideMenu;
    this.sideMenuService.drawerContainer = this.drawerContainer;
    this.notificationsMenuService.sidenav = this.sideNotifications;
    if (isPlatformBrowser(this.platformId)) {
      this.open_menu = true;
    }
  }
}
