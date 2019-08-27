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
var layouts_service_1 = require("../services/layouts.service");
var ListsResolver = /** @class */ (function () {
    function ListsResolver(layoutsService) {
        this.layoutsService = layoutsService;
    }
    ListsResolver.prototype.resolve = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var breadcrumbs = [
                { url: '/layouts/lists', label: 'Lists' }
            ];
            _this.layoutsService.getListsData()
                .then(function (data) {
                return resolve({
                    latest_articles_list: data.latest_articles_list,
                    latest_articles_small_list: data.latest_articles_small_list,
                    freelancers_list: data.freelancers_list,
                    users_list: data.users_list,
                    expenses_list: data.expenses_list,
                });
            });
        });
    };
    ListsResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [layouts_service_1.LayoutsService])
    ], ListsResolver);
    return ListsResolver;
}());
exports.ListsResolver = ListsResolver;
var CardsResolver = /** @class */ (function () {
    function CardsResolver(layoutsService) {
        this.layoutsService = layoutsService;
    }
    CardsResolver.prototype.resolve = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var breadcrumbs = [
                { url: '/layouts/cards', label: 'Cards' }
            ];
            _this.layoutsService.getCardsData()
                .then(function (data) {
                return resolve({
                    cards2: data.cards2,
                    cards3: data.cards3,
                    cards4: data.cards4,
                });
            });
        });
    };
    CardsResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [layouts_service_1.LayoutsService])
    ], CardsResolver);
    return CardsResolver;
}());
exports.CardsResolver = CardsResolver;
//# sourceMappingURL=layouts.resolver.js.map