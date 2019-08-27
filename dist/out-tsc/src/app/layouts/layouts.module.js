"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var ng2_charts_1 = require("ng2-charts");
var charts_1 = require("../charts");
var layouts_service_1 = require("./services/layouts.service");
var layouts_resolver_1 = require("./resolvers/layouts.resolver");
var cards_component_1 = require("./pages/cards/cards.component");
var grids_component_1 = require("./pages/grids/grids.component");
var lists_component_1 = require("./pages/lists/lists.component");
var tabs_component_1 = require("./pages/tabs/tabs.component");
var shared_1 = require("../shared");
exports.layoutsRoutes = [
    {
        path: '',
        redirectTo: 'grids'
    },
    {
        path: 'grids',
        component: grids_component_1.GridsPageComponent
    },
    {
        path: 'lists',
        component: lists_component_1.ListsPageComponent,
        resolve: {
            data: layouts_resolver_1.ListsResolver
        }
    },
    {
        path: 'cards',
        component: cards_component_1.CardsPageComponent,
        resolve: {
            data: layouts_resolver_1.CardsResolver
        }
    },
    {
        path: 'tabs',
        component: tabs_component_1.TabsPageComponent,
        resolve: {
            data: charts_1.Ng2ChartsResolver
        }
    }
];
var LayoutsModule = /** @class */ (function () {
    function LayoutsModule() {
    }
    LayoutsModule = __decorate([
        core_1.NgModule({
            declarations: [
                grids_component_1.GridsPageComponent,
                lists_component_1.ListsPageComponent,
                cards_component_1.CardsPageComponent,
                tabs_component_1.TabsPageComponent
            ],
            providers: [
                charts_1.ChartsDataService,
                charts_1.Ng2ChartsResolver,
                layouts_resolver_1.ListsResolver,
                layouts_resolver_1.CardsResolver,
                layouts_service_1.LayoutsService
            ],
            imports: [
                router_1.RouterModule.forChild(exports.layoutsRoutes),
                common_1.CommonModule,
                ng2_charts_1.ChartsModule,
                shared_1.SharedModule
            ]
        })
    ], LayoutsModule);
    return LayoutsModule;
}());
exports.LayoutsModule = LayoutsModule;
//# sourceMappingURL=layouts.module.js.map