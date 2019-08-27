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
var ng2_nvd3_1 = require("ng2-nvd3");
var ng2_charts_1 = require("ng2-charts");
require("chart.js");
require("d3");
require("nvd3");
var material_1 = require("@angular/material");
var charts_data_service_1 = require("./services/charts-data.service");
var charts_resolver_1 = require("./resolvers/charts.resolver");
var ng2_charts_component_1 = require("./pages/ng2-charts/ng2-charts.component");
var ng2_nvd3_component_1 = require("./pages/ng2-nvd3/ng2-nvd3.component");
exports.chartsRoutes = [
    {
        path: '',
        redirectTo: 'ng2Charts'
    },
    {
        path: 'ng2Charts',
        component: ng2_charts_component_1.Ng2ChartsPageComponent,
        resolve: {
            data: charts_resolver_1.Ng2ChartsResolver
        }
    },
    {
        path: 'ng2Nvd3',
        component: ng2_nvd3_component_1.Ng2Nvd3PageComponent,
        resolve: {
            data: charts_resolver_1.Ng2Nvd3ChartsResolver
        }
    }
];
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        core_1.NgModule({
            declarations: [
                ng2_nvd3_component_1.Ng2Nvd3PageComponent,
                ng2_charts_component_1.Ng2ChartsPageComponent
            ],
            providers: [
                charts_data_service_1.ChartsDataService,
                charts_resolver_1.Ng2ChartsResolver,
                charts_resolver_1.Ng2Nvd3ChartsResolver
            ],
            imports: [
                router_1.RouterModule.forChild(exports.chartsRoutes),
                common_1.CommonModule,
                material_1.MatTabsModule,
                ng2_nvd3_1.NvD3Module,
                ng2_charts_1.ChartsModule
            ]
        })
    ], ChartsModule);
    return ChartsModule;
}());
exports.ChartsModule = ChartsModule;
//# sourceMappingURL=charts.module.js.map