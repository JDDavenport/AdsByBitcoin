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
var CardsPageComponent = /** @class */ (function () {
    function CardsPageComponent(route) {
        this.route = route;
        this.cards2 = undefined;
        this.cards3 = undefined;
        this.cards4 = undefined;
        var data = route.snapshot.data['data'];
        this.cards2 = data.cards2;
        this.cards3 = data.cards3;
        this.cards4 = data.cards4;
    }
    CardsPageComponent = __decorate([
        core_1.Component({
            selector: 'app-cards-page',
            templateUrl: './cards.component.html',
            styleUrls: ['./styles/cards.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], CardsPageComponent);
    return CardsPageComponent;
}());
exports.CardsPageComponent = CardsPageComponent;
//# sourceMappingURL=cards.component.js.map