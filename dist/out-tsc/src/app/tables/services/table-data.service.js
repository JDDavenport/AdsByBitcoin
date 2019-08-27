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
var TableDataService = /** @class */ (function () {
    function TableDataService(http, baseHref) {
        this.http = http;
        this.baseHref = baseHref;
        this.baseUrl = '';
        this.baseUrl = baseHref;
    }
    TableDataService.prototype.getRegularTableData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + '/assets/data/regular_table.json')
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return reject(); });
        });
    };
    TableDataService.prototype.getExtendedTableData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + '/assets/data/extended_table.json')
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return reject(); });
        });
    };
    TableDataService.prototype.getSmartTableData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + '/assets/data/smart_table.json')
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return reject(); });
        });
    };
    TableDataService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject(common_1.APP_BASE_HREF)),
        __metadata("design:paramtypes", [http_1.HttpClient, String])
    ], TableDataService);
    return TableDataService;
}());
exports.TableDataService = TableDataService;
//# sourceMappingURL=table-data.service.js.map