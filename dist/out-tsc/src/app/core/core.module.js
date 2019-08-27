"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var breadcrumb_component_1 = require("./breadcrumb/breadcrumb.component");
// Top navbar stuff
var messages_menu_component_1 = require("./top-navbar/messages-menu/messages-menu.component");
var messages_menu_service_1 = require("./top-navbar/messages-menu/messages-menu.service");
var notifications_menu_button_component_1 = require("./top-navbar/notifications-menu/button/notifications-menu-button.component");
var notifications_menu_content_component_1 = require("./top-navbar/notifications-menu/content/notifications-menu-content.component");
var notifications_menu_service_1 = require("./top-navbar/notifications-menu/notifications-menu.service");
var search_bar_component_1 = require("./top-navbar/search-bar/search-bar.component");
var top_navbar_content_component_1 = require("./top-navbar/content/top-navbar-content.component");
// Side menu stuff
var condense_component_1 = require("./side-menu/condense/condense.component");
var top_items_component_1 = require("./side-menu/top-items/top-items.component");
var side_menu_content_component_1 = require("./side-menu/content/side-menu-content.component");
var side_menu_service_1 = require("./side-menu/side-menu.service");
// 404 page stuff
var error_404_page_component_1 = require("./404/error-404-page.component");
var error_404_page_resolver_1 = require("./404/error-404-page.resolver");
var responsive_breakpoints_component_1 = require("./responsive-breakpoints/responsive-breakpoints.component");
var responsive_breakpoint_directive_1 = require("./responsive-breakpoints/responsive-breakpoint.directive");
var responsive_breakpoints_service_1 = require("./responsive-breakpoints/responsive-breakpoints.service");
// Required modules
var shared_1 = require("../shared");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            declarations: [
                breadcrumb_component_1.BreadcrumbComponent,
                // Top navbar stuff
                messages_menu_component_1.MessagesMenuComponent,
                notifications_menu_button_component_1.NotificationsMenuButtonComponent,
                notifications_menu_content_component_1.NotificationsMenuContentComponent,
                search_bar_component_1.SearchBarComponent,
                top_navbar_content_component_1.TopNavbarContentComponent,
                // Side menu stuff
                condense_component_1.CondenseMenuComponent,
                top_items_component_1.MenuTopItemsComponent,
                side_menu_content_component_1.SideMenuContentComponent,
                // 404
                error_404_page_component_1.Error404PageComponent,
                // Responsive stuff
                responsive_breakpoint_directive_1.ResponsiveBreakpointDirective,
                responsive_breakpoints_component_1.ResponsiveBreakpointsComponent
            ],
            imports: [
                shared_1.SharedModule
            ],
            providers: [
                messages_menu_service_1.MessagesMenuService,
                notifications_menu_service_1.NotificationsMenuService,
                side_menu_service_1.SideMenuService,
                // 404
                error_404_page_resolver_1.Error404PageResolver,
                // Responsive stuff
                responsive_breakpoints_service_1.ResponsiveBreakpointsService
            ],
            exports: [
                breadcrumb_component_1.BreadcrumbComponent,
                top_navbar_content_component_1.TopNavbarContentComponent,
                side_menu_content_component_1.SideMenuContentComponent,
                notifications_menu_content_component_1.NotificationsMenuContentComponent,
                // 404
                error_404_page_component_1.Error404PageComponent,
                // Responsive stuff
                responsive_breakpoints_component_1.ResponsiveBreakpointsComponent
            ]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map