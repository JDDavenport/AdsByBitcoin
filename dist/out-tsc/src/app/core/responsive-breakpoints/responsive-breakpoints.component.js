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
var common_1 = require("@angular/common");
var responsive_breakpoints_service_1 = require("./responsive-breakpoints.service");
var responsive_breakpoint_directive_1 = require("./responsive-breakpoint.directive");
var ResponsiveBreakpointsComponent = /** @class */ (function () {
    function ResponsiveBreakpointsComponent(responsiveService, platformId) {
        this.responsiveService = responsiveService;
        this.platformId = platformId;
    }
    ResponsiveBreakpointsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (common_1.isPlatformBrowser(this.platformId)) {
            // Client code only
            var breakpointObserverOptions_1 = {
                threshold: 0.90
            };
            this.breakpoints.forEach(function (breakpoint) {
                var breakpointObserver = new IntersectionObserver(function (entries, observer) {
                    entries.forEach(function (entry) {
                        if (entry.target === breakpoint.element.nativeElement) {
                            var inView = (entry.intersectionRatio > 0.90) ? true : false;
                            _this.responsiveService.responsiveSubject.next({ screen: breakpoint.screen, active: inView });
                        }
                    });
                }, breakpointObserverOptions_1);
                breakpointObserver.observe(breakpoint.element.nativeElement);
            });
        }
        else {
            // Server code only
        }
    };
    __decorate([
        core_1.ViewChildren(responsive_breakpoint_directive_1.ResponsiveBreakpointDirective),
        __metadata("design:type", core_1.QueryList)
    ], ResponsiveBreakpointsComponent.prototype, "breakpoints", void 0);
    ResponsiveBreakpointsComponent = __decorate([
        core_1.Component({
            selector: 'app-responsive-breakpoints',
            styleUrls: ['./styles/responsive-breakpoints.scss'],
            templateUrl: './responsive-breakpoints.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(1, core_1.Inject(core_1.PLATFORM_ID)),
        __metadata("design:paramtypes", [responsive_breakpoints_service_1.ResponsiveBreakpointsService,
            Object])
    ], ResponsiveBreakpointsComponent);
    return ResponsiveBreakpointsComponent;
}());
exports.ResponsiveBreakpointsComponent = ResponsiveBreakpointsComponent;
//# sourceMappingURL=responsive-breakpoints.component.js.map