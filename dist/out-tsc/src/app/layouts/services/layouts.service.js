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
var http_1 = require("@angular/common/http");
var common_1 = require("@angular/common");
var LayoutsService = /** @class */ (function () {
    function LayoutsService(http, baseHref) {
        this.http = http;
        this.baseHref = baseHref;
        this.baseUrl = '';
        this.baseUrl = baseHref;
    }
    LayoutsService.prototype.getListsData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + '/assets/data/lists.json')
                .subscribe(function (data) { return resolve(data); }, function (err) { return reject(); });
        });
    };
    LayoutsService.prototype.getCardsData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + '/assets/data/cards.json')
                .subscribe(function (data) { return resolve(data); }, function (err) { return reject(); });
        });
    };
    LayoutsService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject(common_1.APP_BASE_HREF)),
        __metadata("design:paramtypes", [http_1.HttpClient, String])
    ], LayoutsService);
    return LayoutsService;
}());
exports.LayoutsService = LayoutsService;
//# sourceMappingURL=layouts.service.js.map