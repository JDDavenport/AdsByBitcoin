"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("./core");
var common_1 = require("@angular/common");
var auth_service_1 = require("./auth/auth.service");
var router_1 = require("@angular/router");
var AppComponent = /** @class */ (function () {
    function AppComponent(sideMenuService, notificationsMenuService, messagesMenuService, auth, router, platformId) {
        var _this = this;
        this.sideMenuService = sideMenuService;
        this.notificationsMenuService = notificationsMenuService;
        this.messagesMenuService = messagesMenuService;
        this.auth = auth;
        this.router = router;
        this.platformId = platformId;
        this.notifications = [];
        this.messages = [];
        this.open_menu = false;
        notificationsMenuService.getNotifications().then(function (notifications) {
            _this.notifications = notifications;
        });
        messagesMenuService.getMessages().then(function (messages) {
            _this.messages = messages;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log("in onit");
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        if (this.auth.isLoggedIn()) {
            this.router.navigate(['/dashboard']);
        }
    };
    AppComponent.prototype.ngAfterContentInit = function () {
        this.sideMenuService.sidenav = this.sideMenu;
        this.sideMenuService.drawerContainer = this.drawerContainer;
        this.notificationsMenuService.sidenav = this.sideNotifications;
        if (common_1.isPlatformBrowser(this.platformId)) {
            this.open_menu = true;
        }
    };
    __decorate([
        core_1.ViewChild('drawerContainer'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "drawerContainer", void 0);
    __decorate([
        core_1.ViewChild('sideMenu'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "sideMenu", void 0);
    __decorate([
        core_1.ViewChild('sideNotifications'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "sideNotifications", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./styles/app.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(5, core_1.Inject(core_1.PLATFORM_ID)),
        __metadata("design:paramtypes", [core_2.SideMenuService,
            core_2.NotificationsMenuService,
            core_2.MessagesMenuService, auth_service_1.AuthService, router_1.Router,
            Object])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map