"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_1 = require("../shared");
var auto_completer_service_1 = require("./services/auto-completer.service");
var alerts_page_component_1 = require("./pages/alerts/alerts.page.component");
var auto_completer_component_1 = require("./pages/auto-completer/auto-completer.component");
var file_uploader_page_component_1 = require("./pages/file-uploader/file-uploader.page.component");
var modals_component_1 = require("./pages/modals/modals.component");
var notifications_page_component_1 = require("./pages/notifications/notifications.page.component");
var login_component_1 = require("./pages/modals/templates/login/login.component");
var register_component_1 = require("./pages/modals/templates/register/register.component");
exports.utilsRoutes = [
    {
        path: '',
        redirectTo: 'modals'
    },
    {
        path: 'file-uploader',
        component: file_uploader_page_component_1.FileUploaderPageComponent
    },
    {
        path: 'auto-completer',
        component: auto_completer_component_1.AutoCompleterPageComponent
    },
    {
        path: 'modals',
        component: modals_component_1.ModalsPageComponent
    },
    {
        path: 'notifications',
        component: notifications_page_component_1.NotificationsPageComponent
    },
    {
        path: 'alerts',
        component: alerts_page_component_1.AlertsPageComponent
    }
];
var UtilsModule = /** @class */ (function () {
    function UtilsModule() {
    }
    UtilsModule = __decorate([
        core_1.NgModule({
            declarations: [
                file_uploader_page_component_1.FileUploaderPageComponent,
                auto_completer_component_1.AutoCompleterPageComponent,
                modals_component_1.ModalsPageComponent,
                notifications_page_component_1.NotificationsPageComponent,
                login_component_1.LoginModalComponent,
                register_component_1.RegisterModalComponent,
                alerts_page_component_1.AlertsPageComponent
            ],
            providers: [
                auto_completer_service_1.AutoCompleterService,
            ],
            entryComponents: [
                login_component_1.LoginModalComponent,
                register_component_1.RegisterModalComponent
            ],
            imports: [
                router_1.RouterModule.forChild(exports.utilsRoutes),
                shared_1.SharedModule
            ]
        })
    ], UtilsModule);
    return UtilsModule;
}());
exports.UtilsModule = UtilsModule;
//# sourceMappingURL=utils.module.js.map