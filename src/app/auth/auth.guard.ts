import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';
// import { NotifyService } from './notify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
    // private notify: NotifyService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('in CanActivate');

    return this.auth.user.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        if (!loggedIn) {
          console.log('access denied');
          //this.notify.update('You must be logged in!', 'error');
          this.router.navigate(['/login']);
        }
        // else
        // {
        //   console.log('access granted');

        //   this.router.navigate(['/dashboard']);
        // }
      })
    );
  }
}