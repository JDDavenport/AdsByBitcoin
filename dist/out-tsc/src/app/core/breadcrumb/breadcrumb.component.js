"use strict";
// Inspired on: http://brianflove.com/2016/10/23/angular2-breadcrumb-using-router/
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
var operators_1 = require("rxjs/operators");
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.breadcrumbs = [];
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._routerSubscription = this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }), operators_1.map(function () { return _this.activatedRoute; }), operators_1.map(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), operators_1.filter(function (route) { return route.outlet === 'primary'; }), operators_1.switchMap(function (route) { return route.data; }))
            .subscribe(function (event) {
            if (event['data'] && event['data'].breadcrumbs) {
                _this.breadcrumbs = event['data'].breadcrumbs;
            }
            else {
                // Empty breadcrumbs
                _this.breadcrumbs = [];
            }
        });
    };
    BreadcrumbComponent.prototype.ngOnDestroy = function () {
        if (this._routerSubscription) {
            this._routerSubscription.unsubscribe();
        }
    };
    BreadcrumbComponent = __decorate([
        core_1.Component({
            selector: 'app-breadcrumb',
            styleUrls: ['./styles/breadcrumb.scss'],
            templateUrl: './breadcrumb.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());
exports.BreadcrumbComponent = BreadcrumbComponent;
//# sourceMappingURL=breadcrumb.component.js.map