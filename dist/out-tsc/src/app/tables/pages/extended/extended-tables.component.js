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
var ExtendedTablesPageComponent = /** @class */ (function () {
    function ExtendedTablesPageComponent(route) {
        this.route = route;
        this.displayedColumns = ['picture', 'name', 'status', 'progress', 'comments', 'policy'];
        this.dataSource = undefined;
        this.dataSource = route.snapshot.data['tableData'].data;
    }
    ExtendedTablesPageComponent = __decorate([
        core_1.Component({
            selector: 'app-extended-tables-page',
            templateUrl: './extended-tables.component.html',
            styleUrls: ['./styles/_extended-tables.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], ExtendedTablesPageComponent);
    return ExtendedTablesPageComponent;
}());
exports.ExtendedTablesPageComponent = ExtendedTablesPageComponent;
//# sourceMappingURL=extended-tables.component.js.map