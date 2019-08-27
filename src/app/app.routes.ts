import { Routes } from '@angular/router';
import { Error404PageComponent, Error404PageResolver } from './core';
import { LoginComponent, ProfileComponent, UserResolver, AuthGuard } from './auth/index'
import { AdComponent } from './ad/ad.component';
// import { RegisterModalComponent } from './utils/pages/modals/templates/register/register.component';

export const rootRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'logout', component: ProfileComponent },
  // { path: 'register', component: RegisterModalComponent},
  { path: 'login', loadChildren: './utils/utils.module#UtilsModule'},
  { path: 'ad/:id', component: AdComponent, canActivate: [AuthGuard]},
  { path: 'user', component: ProfileComponent,  resolve: { data: UserResolver}},
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] },
  { path: 'forms', loadChildren: './forms/forms.module#FormsModule', canActivate: [AuthGuard] },
  { path: 'tables', loadChildren: './tables/tables.module#TablesModule', canActivate: [AuthGuard] },
  { path: 'charts', loadChildren: './charts/charts.module#ChartsModule', canActivate: [AuthGuard] },
  { path: 'utils', loadChildren: './utils/utils.module#UtilsModule', canActivate: [AuthGuard] },
  { path: 'layouts', loadChildren: './layouts/layouts.module#LayoutsModule', canActivate: [AuthGuard] },
  {
    path: '404',
    component: Error404PageComponent,
    resolve: { data: Error404PageResolver }
  },
  {
    // There's a bug that's preventing wild card routes to be lazy loaded (see: https://github.com/angular/angular/issues/13848)
    // That's why the Error page should be eagerly loaded
    path: '**',
    component: Error404PageComponent,
    resolve: { data: Error404PageResolver }
  }
];
