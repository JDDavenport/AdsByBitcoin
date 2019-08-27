"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("./core");
var index_1 = require("./auth/index");
// import { RegisterModalComponent } from './utils/pages/modals/templates/register/register.component';
exports.rootRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    // { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterModalComponent},
    { path: 'login', loadChildren: './utils/utils.module#UtilsModule' },
    { path: 'user', component: index_1.ProfileComponent, resolve: { data: index_1.UserResolver } },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [index_1.AuthGuard] },
    { path: 'forms', loadChildren: './forms/forms.module#FormsModule', canActivate: [index_1.AuthGuard] },
    { path: 'tables', loadChildren: './tables/tables.module#TablesModule', canActivate: [index_1.AuthGuard] },
    { path: 'charts', loadChildren: './charts/charts.module#ChartsModule', canActivate: [index_1.AuthGuard] },
    { path: 'utils', loadChildren: './utils/utils.module#UtilsModule', canActivate: [index_1.AuthGuard] },
    { path: 'layouts', loadChildren: './layouts/layouts.module#LayoutsModule', canActivate: [index_1.AuthGuard] },
    {
        path: '404',
        component: core_1.Error404PageComponent,
        resolve: { data: core_1.Error404PageResolver }
    },
    {
        // There's a bug that's preventing wild card routes to be lazy loaded (see: https://github.com/angular/angular/issues/13848)
        // That's why the Error page should be eagerly loaded
        path: '**',
        component: core_1.Error404PageComponent,
        resolve: { data: core_1.Error404PageResolver }
    }
];
//# sourceMappingURL=app.routes.js.map