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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
// Material modules
var material_1 = require("@angular/material");
var preload_image_component_1 = require("./preload-image/preload-image.component");
var alert_component_1 = require("./alert/alert.component");
var notification_component_1 = require("./notification/notification.component");
var file_uploader_directive_1 = require("./file-uploader/file-uploader.directive");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [
                // Shared components
                preload_image_component_1.PreloadImageComponent,
                alert_component_1.AlertComponent,
                notification_component_1.NotificationComponent,
                file_uploader_directive_1.FileUploaderDirective
            ],
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                // Material modules
                material_1.MatAutocompleteModule,
                material_1.MatCheckboxModule,
                material_1.MatChipsModule,
                material_1.MatExpansionModule,
                material_1.MatMenuModule,
                material_1.MatProgressBarModule,
                material_1.MatSidenavModule,
                material_1.MatTabsModule,
                material_1.MatDialogModule,
                material_1.MatAutocompleteModule,
                material_1.MatSnackBarModule,
                material_1.MatButtonToggleModule,
                material_1.MatRadioModule,
                material_1.MatDatepickerModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatNativeDateModule,
                material_1.MatInputModule,
                material_1.MatSelectModule
            ],
            entryComponents: [
                alert_component_1.AlertComponent,
                notification_component_1.NotificationComponent
            ],
            providers: [],
            exports: [
                // Shared components
                preload_image_component_1.PreloadImageComponent,
                alert_component_1.AlertComponent,
                notification_component_1.NotificationComponent,
                file_uploader_directive_1.FileUploaderDirective,
                // Re-export these modules to prevent repeated imports (see: https://angular.io/guide/ngmodule#re-exporting-other-modules)
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                // Material modules
                material_1.MatAutocompleteModule,
                material_1.MatCheckboxModule,
                material_1.MatChipsModule,
                material_1.MatExpansionModule,
                material_1.MatMenuModule,
                material_1.MatProgressBarModule,
                material_1.MatSidenavModule,
                material_1.MatTabsModule,
                material_1.MatDialogModule,
                material_1.MatSnackBarModule,
                material_1.MatButtonToggleModule,
                material_1.MatRadioModule,
                material_1.MatDatepickerModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatNativeDateModule,
                material_1.MatInputModule,
                material_1.MatSelectModule
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map