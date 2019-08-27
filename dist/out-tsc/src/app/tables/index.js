"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var table_data_service_1 = require("./services/table-data.service");
exports.TableDataService = table_data_service_1.TableDataService;
var tables_resolver_1 = require("./resolvers/tables.resolver");
exports.RegularTablesResolver = tables_resolver_1.RegularTablesResolver;
exports.ExtendedTablesResolver = tables_resolver_1.ExtendedTablesResolver;
exports.SmartTablesResolver = tables_resolver_1.SmartTablesResolver;
var extended_tables_component_1 = require("./pages/extended/extended-tables.component");
exports.ExtendedTablesPageComponent = extended_tables_component_1.ExtendedTablesPageComponent;
var regular_tables_component_1 = require("./pages/regular/regular-tables.component");
exports.RegularTablesPageComponent = regular_tables_component_1.RegularTablesPageComponent;
var smart_tables_component_1 = require("./pages/smart/smart-tables.component");
exports.SmartTablesPageComponent = smart_tables_component_1.SmartTablesPageComponent;
var tables_module_1 = require("./tables.module");
exports.TablesModule = tables_module_1.TablesModule;
//# sourceMappingURL=index.js.map