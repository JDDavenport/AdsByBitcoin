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
var side_menu_service_1 = require("../../side-menu/side-menu.service");
var CondenseMenuComponent = /** @class */ (function () {
    function CondenseMenuComponent(sideMenuService, zone, changeRef) {
        this.sideMenuService = sideMenuService;
        this.zone = zone;
        this.changeRef = changeRef;
        this.menuState = 'expanded';
    }
    CondenseMenuComponent.prototype.toggleState = function () {
        this.menuState = (this.menuState === 'expanded' ? 'condensed' : 'expanded');
    };
    CondenseMenuComponent.prototype.animationDone = function (e) {
        this.sideMenuService.drawerContainer._updateContentMargins();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CondenseMenuComponent.prototype, "menuState", void 0);
    CondenseMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-condense',
            templateUrl: './condense.component.html',
            styleUrls: [
                './styles/condense.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None,
            animations: [
                animations_1.trigger('condense', [
                    animations_1.state('condensed', animations_1.style({
                        width: '50px'
                    })),
                    animations_1.state('expanded', animations_1.style({
                        width: '260px'
                    })),
                    animations_1.transition('condensed => expanded', animations_1.animate('100ms ease-in')),
                    animations_1.transition('expanded => condensed', animations_1.animate('100ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [side_menu_service_1.SideMenuService,
            core_1.NgZone,
            core_1.ChangeDetectorRef])
    ], CondenseMenuComponent);
    return CondenseMenuComponent;
}());
exports.CondenseMenuComponent = CondenseMenuComponent;
//# sourceMappingURL=condense.component.js.map