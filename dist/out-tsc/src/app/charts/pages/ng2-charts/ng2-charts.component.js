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
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var Ng2ChartsPageComponent = /** @class */ (function () {
    // Library references
    // https://github.com/valor-software/ng2-charts
    // https://valor-software.com/ng2-charts/
    // http://www.chartjs.org/docs/latest/
    function Ng2ChartsPageComponent(route, sanitizer, platformId) {
        this.platformId = platformId;
        this.data = {};
        this.data = route.snapshot.data['data'];
        // <canvas> element, which is not supported by the SSR DOM implementation
        // See: https://github.com/angular/universal-starter/issues/538#issuecomment-365518693
        this.isBrowser = common_1.isPlatformBrowser(platformId);
    }
    // events
    Ng2ChartsPageComponent.prototype.chartClicked = function (e) {
        // console.log(e);
    };
    Ng2ChartsPageComponent.prototype.chartHovered = function (e) {
        // console.log(e);
    };
    Ng2ChartsPageComponent = __decorate([
        core_1.Component({
            selector: 'app-ng2-charts-page',
            templateUrl: './ng2-charts.component.html',
            styleUrls: ['./styles/ng2-charts.scss']
        }),
        __param(2, core_1.Inject(core_1.PLATFORM_ID)),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            platform_browser_1.DomSanitizer,
            Object])
    ], Ng2ChartsPageComponent);
    return Ng2ChartsPageComponent;
}());
exports.Ng2ChartsPageComponent = Ng2ChartsPageComponent;
//# sourceMappingURL=ng2-charts.component.js.map