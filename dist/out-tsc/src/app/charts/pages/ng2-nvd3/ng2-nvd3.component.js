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
var Ng2Nvd3PageComponent = /** @class */ (function () {
    // Library references
    // https://github.com/krispo/ng2-nvd3
    // http://nvd3-community.github.io/nvd3/examples/documentation.html <- NVD3 docs
    function Ng2Nvd3PageComponent(route, platformId) {
        this.route = route;
        this.platformId = platformId;
        this.data = undefined;
        this.options = undefined;
        this.isBrowser = common_1.isPlatformBrowser(platformId);
        this.data = route.snapshot.data['data'].data;
        this.options = route.snapshot.data['data'].options;
    }
    Ng2Nvd3PageComponent.prototype.toggleDonutChart = function (donut) {
        var options = donut.options;
        options.chart.donut = !options.chart.donut;
        donut.updateWithOptions(options);
    };
    Ng2Nvd3PageComponent = __decorate([
        core_1.Component({
            selector: 'app-ng2-nvd3-page',
            templateUrl: './ng2-nvd3.component.html',
            styleUrls: [
                './styles/nvd3.scss',
                '../../../../../node_modules/nvd3/build/nv.d3.css'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(1, core_1.Inject(core_1.PLATFORM_ID)),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            Object])
    ], Ng2Nvd3PageComponent);
    return Ng2Nvd3PageComponent;
}());
exports.Ng2Nvd3PageComponent = Ng2Nvd3PageComponent;
//# sourceMappingURL=ng2-nvd3.component.js.map