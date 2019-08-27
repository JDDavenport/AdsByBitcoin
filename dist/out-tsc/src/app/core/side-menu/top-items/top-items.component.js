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
var animations_1 = require("@angular/animations");
var MenuTopItemsComponent = /** @class */ (function () {
    function MenuTopItemsComponent() {
        this.menuState = 'expanded';
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MenuTopItemsComponent.prototype, "menuState", void 0);
    MenuTopItemsComponent = __decorate([
        core_1.Component({
            selector: 'app-top-items',
            templateUrl: './top-items.component.html',
            styleUrls: [
                './styles/top-items.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None,
            animations: [
                animations_1.trigger('menuState', [
                    animations_1.state('condensed', animations_1.style({
                        backgroundColor: 'blue'
                    })),
                    animations_1.state('expanded', animations_1.style({
                        backgroundColor: 'white'
                    })),
                    animations_1.transition('condensed => expanded', animations_1.animate('100ms ease-in')),
                    animations_1.transition('expanded => condensed', animations_1.animate('100ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], MenuTopItemsComponent);
    return MenuTopItemsComponent;
}());
exports.MenuTopItemsComponent = MenuTopItemsComponent;
//# sourceMappingURL=top-items.component.js.map