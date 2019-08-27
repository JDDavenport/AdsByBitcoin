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
var ListsPageComponent = /** @class */ (function () {
    function ListsPageComponent(route) {
        this.route = route;
        this.latest_articles_list = undefined;
        this.latest_articles_small_list = undefined;
        this.freelancers_list = undefined;
        this.users_list = undefined;
        this.expenses_list = undefined;
        var data = route.snapshot.data['data'];
        this.latest_articles_list = data.latest_articles_list;
        this.freelancers_list = data.freelancers_list;
        this.latest_articles_small_list = data.latest_articles_small_list;
        this.users_list = data.users_list;
        this.expenses_list = data.expenses_list;
    }
    ListsPageComponent = __decorate([
        core_1.Component({
            selector: 'app-lists-page',
            templateUrl: './lists.component.html',
            styleUrls: ['./styles/lists.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], ListsPageComponent);
    return ListsPageComponent;
}());
exports.ListsPageComponent = ListsPageComponent;
//# sourceMappingURL=lists.component.js.map