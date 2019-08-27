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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var DashboardPageComponent = /** @class */ (function () {
    function DashboardPageComponent(route, baseHref, platformId) {
        this.baseHref = baseHref;
        this.platformId = platformId;
        this.charts = {};
        this.orders = [
            { title: 'Completed Orders', day: 35, week: 120, month: 499 },
            { title: 'Abandoned Carts', day: 4, week: 21, month: 115 },
            { title: 'New Accounts', day: 15, week: 100, month: 340 },
            { title: 'New Leads', day: 55, week: 201, month: 789 },
            { title: '% of NL that made purchase', day: '10%', week: '11%', month: '9%' },
            { title: 'Unsubscribed customers', day: 2, week: 10, month: 43 }
        ];
        this.tableDisplayedColumns = ['picture', 'name', 'status', 'progress', 'comments', 'policy'];
        this.tableDataSource = undefined;
        this.baseUrl = '';
        // <canvas> element is not yet supported by the SSR DOM implementation
        // See: https://github.com/angular/universal-starter/issues/538#issuecomment-365518693
        this.isBrowser = common_1.isPlatformBrowser(platformId);
        this.charts = route.snapshot.data['chart'];
        this.charts.lineChart.options.maintainAspectRatio = false;
        this.charts.doughnutChart.options.maintainAspectRatio = false;
        this.baseUrl = baseHref;
        this.tableDataSource = route.snapshot.data['table'].data;
    }
    DashboardPageComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard-page',
            templateUrl: './dashboard.component.html',
            styleUrls: [
                './styles/dashboard.scss',
                '../layouts/pages/lists/styles/lists.scss',
                '../layouts/pages/tabs/styles/tabs.scss',
                '../charts/pages/ng2-charts/styles/ng2-charts.scss',
                '../tables/pages/extended/styles/_extended-tables.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(1, core_1.Inject(common_1.APP_BASE_HREF)),
        __param(2, core_1.Inject(core_1.PLATFORM_ID)),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, String, Object])
    ], DashboardPageComponent);
    return DashboardPageComponent;
}());
exports.DashboardPageComponent = DashboardPageComponent;
//# sourceMappingURL=dashboard.component.js.map