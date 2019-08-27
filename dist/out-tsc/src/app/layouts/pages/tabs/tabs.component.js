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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var TabsPageComponent = /** @class */ (function () {
    function TabsPageComponent(route, platformId) {
        this.platformId = platformId;
        this.data = {};
        this.data = route.snapshot.data['data'];
        // <canvas> element is not yet supported by the SSR DOM implementation
        // See: https://github.com/angular/universal-starter/issues/538#issuecomment-365518693
        this.isBrowser = common_1.isPlatformBrowser(platformId);
    }
    TabsPageComponent = __decorate([
        core_1.Component({
            selector: 'app-tabs-page',
            templateUrl: './tabs.component.html',
            styleUrls: ['./styles/tabs.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(1, core_1.Inject(core_1.PLATFORM_ID)),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            Object])
    ], TabsPageComponent);
    return TabsPageComponent;
}());
exports.TabsPageComponent = TabsPageComponent;
//# sourceMappingURL=tabs.component.js.map