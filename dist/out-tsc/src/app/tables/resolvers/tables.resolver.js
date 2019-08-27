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
var table_data_service_1 = require("../services/table-data.service");
var RegularTablesResolver = /** @class */ (function () {
    function RegularTablesResolver(tableDataService) {
        this.tableDataService = tableDataService;
    }
    RegularTablesResolver.prototype.resolve = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.tableDataService.getRegularTableData()
                .then(function (tableData) {
                return resolve({
                    data: tableData
                });
            });
        });
    };
    RegularTablesResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [table_data_service_1.TableDataService])
    ], RegularTablesResolver);
    return RegularTablesResolver;
}());
exports.RegularTablesResolver = RegularTablesResolver;
var ExtendedTablesResolver = /** @class */ (function () {
    function ExtendedTablesResolver(tableDataService) {
        this.tableDataService = tableDataService;
    }
    ExtendedTablesResolver.prototype.resolve = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.tableDataService.getExtendedTableData()
                .then(function (tableData) {
                return resolve({
                    data: tableData
                });
            });
        });
    };
    ExtendedTablesResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [table_data_service_1.TableDataService])
    ], ExtendedTablesResolver);
    return ExtendedTablesResolver;
}());
exports.ExtendedTablesResolver = ExtendedTablesResolver;
var SmartTablesResolver = /** @class */ (function () {
    function SmartTablesResolver(tableDataService) {
        this.tableDataService = tableDataService;
    }
    SmartTablesResolver.prototype.resolve = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.tableDataService.getSmartTableData()
                .then(function (tableData) {
                return resolve({
                    data: tableData
                });
            });
        });
    };
    SmartTablesResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [table_data_service_1.TableDataService])
    ], SmartTablesResolver);
    return SmartTablesResolver;
}());
exports.SmartTablesResolver = SmartTablesResolver;
//# sourceMappingURL=tables.resolver.js.map