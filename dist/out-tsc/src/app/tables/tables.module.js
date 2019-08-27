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
var forms_1 = require("@angular/forms");
var shared_1 = require("../shared");
var table_data_service_1 = require("./services/table-data.service");
var tables_resolver_1 = require("./resolvers/tables.resolver");
var extended_tables_component_1 = require("./pages/extended/extended-tables.component");
var regular_tables_component_1 = require("./pages/regular/regular-tables.component");
var smart_tables_component_1 = require("./pages/smart/smart-tables.component");
var ng2_nouislider_1 = require("ng2-nouislider");
var table_1 = require("@angular/material/table");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
exports.tablesRoutes = [
    { path: '', redirectTo: 'regular' },
    {
        path: 'regular',
        component: regular_tables_component_1.RegularTablesPageComponent,
        resolve: {
            tableData: tables_resolver_1.RegularTablesResolver
        }
    },
    {
        path: 'extended',
        component: extended_tables_component_1.ExtendedTablesPageComponent,
        resolve: {
            tableData: tables_resolver_1.ExtendedTablesResolver
        }
    },
    {
        path: 'smart',
        component: smart_tables_component_1.SmartTablesPageComponent,
        resolve: {
            tableData: tables_resolver_1.SmartTablesResolver
        }
    }
];
var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        core_1.NgModule({
            declarations: [
                regular_tables_component_1.RegularTablesPageComponent,
                extended_tables_component_1.ExtendedTablesPageComponent,
                smart_tables_component_1.SmartTablesPageComponent
            ],
            providers: [
                table_data_service_1.TableDataService,
                tables_resolver_1.RegularTablesResolver,
                tables_resolver_1.ExtendedTablesResolver,
                tables_resolver_1.SmartTablesResolver
            ],
            imports: [
                router_1.RouterModule.forChild(exports.tablesRoutes),
                ng2_nouislider_1.NouisliderModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                shared_1.SharedModule,
                common_1.CommonModule,
                table_1.MatTableModule,
                paginator_1.MatPaginatorModule,
                sort_1.MatSortModule
            ]
        })
    ], TablesModule);
    return TablesModule;
}());
exports.TablesModule = TablesModule;
//# sourceMappingURL=tables.module.js.map