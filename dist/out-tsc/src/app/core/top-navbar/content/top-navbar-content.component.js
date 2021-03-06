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
var side_menu_service_1 = require("../../side-menu/side-menu.service");
var responsive_breakpoints_service_1 = require("../../responsive-breakpoints/responsive-breakpoints.service");
var common_1 = require("@angular/common");
var operators_1 = require("rxjs/operators");
var auth_service_1 = require("../../../auth/auth.service");
var TopNavbarContentComponent = /** @class */ (function () {
    function TopNavbarContentComponent(sideMenuService, responsiveService, auth, baseHref) {
        var _this = this;
        this.sideMenuService = sideMenuService;
        this.responsiveService = responsiveService;
        this.auth = auth;
        this.baseHref = baseHref;
        this.messages = [];
        this.notifications = [];
        this.sideMenuVisible = false;
        this.baseUrl = '';
        this.baseUrl = baseHref;
        responsiveService.responsiveSubject
            .pipe(operators_1.filter(function (breakpoint) { return breakpoint.screen === 'xs-or-sm'; }))
            .subscribe(function (breakpoint) {
            if (breakpoint.active) {
                _this.sideMenuService.sidenav.mode = 'push';
                _this.sideMenuService.sidenav.close().then(function (val) {
                    // console.log('ok closing');
                    _this.sideMenuVisible = false;
                }, function (err) {
                    // console.log('error closing');
                }, function () {
                    // console.log('all closing');
                });
            }
            else {
                _this.sideMenuService.sidenav.mode = 'side';
            }
        });
    }
    TopNavbarContentComponent.prototype.toggleSideMenu = function () {
        var _this = this;
        this.sideMenuService.sidenav.toggle().then(function (val) {
            _this.sideMenuVisible = !_this.sideMenuVisible;
        }, function (err) {
            // console.log('error toggle');
        }, function () {
            // console.log('all toggle');
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TopNavbarContentComponent.prototype, "messages", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TopNavbarContentComponent.prototype, "notifications", void 0);
    TopNavbarContentComponent = __decorate([
        core_1.Component({
            selector: 'app-top-navbar-content',
            styleUrls: ['./styles/top-navbar-content.scss'],
            templateUrl: './top-navbar-content.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(3, core_1.Inject(common_1.APP_BASE_HREF)),
        __metadata("design:paramtypes", [side_menu_service_1.SideMenuService,
            responsive_breakpoints_service_1.ResponsiveBreakpointsService,
            auth_service_1.AuthService, String])
    ], TopNavbarContentComponent);
    return TopNavbarContentComponent;
}());
exports.TopNavbarContentComponent = TopNavbarContentComponent;
//# sourceMappingURL=top-navbar-content.component.js.map