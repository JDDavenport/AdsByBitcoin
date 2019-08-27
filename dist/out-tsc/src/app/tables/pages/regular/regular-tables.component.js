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
var router_1 = require("@angular/router");
var RegularTablesPageComponent = /** @class */ (function () {
    function RegularTablesPageComponent(route) {
        this.route = route;
        this.displayedColumns = ['id', 'name', 'country', 'city', 'birthday', 'age', 'salary'];
        this.dataSource = undefined;
        this.dataSource = route.snapshot.data['tableData'].data;
    }
    RegularTablesPageComponent = __decorate([
        core_1.Component({
            selector: 'app-regular-tables-page',
            templateUrl: './regular-tables.component.html',
            styleUrls: ['./styles/_regular-tables.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], RegularTablesPageComponent);
    return RegularTablesPageComponent;
}());
exports.RegularTablesPageComponent = RegularTablesPageComponent;
//# sourceMappingURL=regular-tables.component.js.map