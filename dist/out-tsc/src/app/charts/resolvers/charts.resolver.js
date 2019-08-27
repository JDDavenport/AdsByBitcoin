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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var charts_data_service_1 = require("../services/charts-data.service");
var Ng2ChartsResolver = /** @class */ (function () {
    function Ng2ChartsResolver(chartsDataService) {
        this.chartsDataService = chartsDataService;
    }
    Ng2ChartsResolver.prototype.resolve = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.chartsDataService.getNg2ChartsData().then(function (data) {
                return resolve(data);
            });
        });
    };
    Ng2ChartsResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [charts_data_service_1.ChartsDataService])
    ], Ng2ChartsResolver);
    return Ng2ChartsResolver;
}());
exports.Ng2ChartsResolver = Ng2ChartsResolver;
var Ng2Nvd3ChartsResolver = /** @class */ (function () {
    function Ng2Nvd3ChartsResolver(chartsDataService) {
        this.chartsDataService = chartsDataService;
    }
    Ng2Nvd3ChartsResolver.prototype.resolve = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.chartsDataService.getNg2Nvd3ChartsData().then(function (data) {
                return resolve(data);
            });
        });
    };
    Ng2Nvd3ChartsResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [charts_data_service_1.ChartsDataService])
    ], Ng2Nvd3ChartsResolver);
    return Ng2Nvd3ChartsResolver;
}());
exports.Ng2Nvd3ChartsResolver = Ng2Nvd3ChartsResolver;
//# sourceMappingURL=charts.resolver.js.map