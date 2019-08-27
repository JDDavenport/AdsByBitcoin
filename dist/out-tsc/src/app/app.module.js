"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var common_1 = require("@nguniversal/common");
var common_2 = require("@angular/common");
var animations_1 = require("@angular/platform-browser/animations");
var app_routes_1 = require("./app.routes");
var core_module_1 = require("./core/core.module");
var shared_module_1 = require("./shared/shared.module");
var http_1 = require("@angular/common/http");
var fire_1 = require("@angular/fire");
var firestore_1 = require("@angular/fire/firestore");
var auth_1 = require("@angular/fire/auth");
var environment_1 = require("../environments/environment");
var shared_1 = require("./shared");
var login_component_1 = require("./auth/login/login.component");
// import { RegisterComponent } from './auth/register/register.component';
var profile_component_1 = require("./auth/profile/profile.component");
var auth_guard_1 = require("./auth/auth.guard");
var user_service_1 = require("./auth/user.service");
var profile_resolver_1 = require("./auth/profile/profile.resolver");
var auth_service_1 = require("./auth/auth.service");
var user_form_component_1 = require("./auth/user-form/user-form.component");
// import { RegisterModalComponent } from './utils/pages/modals/templates/register/register.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                // RegisterComponent,
                profile_component_1.ProfileComponent,
                user_form_component_1.UserFormComponent
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'my-app' }),
                http_1.HttpClientModule,
                router_1.RouterModule.forRoot(app_routes_1.rootRoutes, {
                    // enableTracing :true, // For debugging
                    preloadingStrategy: router_1.PreloadAllModules,
                    initialNavigation: 'enabled',
                    useHash: false
                }),
                core_module_1.CoreModule,
                shared_module_1.SharedModule,
                animations_1.BrowserAnimationsModule,
                common_1.TransferHttpCacheModule,
                fire_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
                firestore_1.AngularFirestoreModule,
                auth_1.AngularFireAuthModule
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                {
                    provide: common_2.APP_BASE_HREF,
                    useValue: "" + environment_1.environment.BASE_URL
                }, shared_1.AdService, auth_guard_1.AuthGuard, user_service_1.UserService, profile_resolver_1.UserResolver, auth_service_1.AuthService, shared_1.FirebaseService
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map