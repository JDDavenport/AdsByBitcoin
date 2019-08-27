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
var ng2_nouislider_1 = require("ng2-nouislider");
var shared_1 = require("../shared");
var forms_resolver_1 = require("./forms.resolver");
var controls_and_validations_component_1 = require("./pages/controls-and-validations/controls-and-validations.component");
var extended_controls_component_1 = require("./pages/extended-controls/extended-controls.component");
var sample_layouts_component_1 = require("./pages/sample-layouts/sample-layouts.component");
var wizard_component_1 = require("./pages/wizard/wizard.component");
var material_forms_component_1 = require("./pages/material-forms/material-forms.component");
exports.formsRoutes = [
    {
        path: '',
        redirectTo: 'controls-and-validations'
    },
    {
        path: 'controls-and-validations',
        component: controls_and_validations_component_1.ControlsAndValidationsPageComponent,
        resolve: {
            data: forms_resolver_1.FormsValidationsResolver
        }
    },
    {
        path: 'extended-controls',
        component: extended_controls_component_1.ExtendedControlsPageComponent,
        resolve: {
            data: forms_resolver_1.FormsExtendedControlsResolver
        }
    },
    {
        path: 'sample-layouts',
        component: sample_layouts_component_1.SampleLayoutsPageComponent,
        resolve: {
            data: forms_resolver_1.FormsLayoutsResolver
        }
    },
    {
        path: 'wizard',
        component: wizard_component_1.WizardPageComponent,
        resolve: {
            data: forms_resolver_1.FormsWizardResolver
        }
    },
    {
        path: 'material-forms',
        component: material_forms_component_1.MaterialFormsPageComponent,
        resolve: {
            data: forms_resolver_1.MaterialFormsResolver
        }
    }
];
var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule = __decorate([
        core_1.NgModule({
            declarations: [
                controls_and_validations_component_1.ControlsAndValidationsPageComponent,
                extended_controls_component_1.ExtendedControlsPageComponent,
                sample_layouts_component_1.SampleLayoutsPageComponent,
                wizard_component_1.WizardPageComponent,
                material_forms_component_1.MaterialFormsPageComponent
            ],
            imports: [
                router_1.RouterModule.forChild(exports.formsRoutes),
                shared_1.SharedModule,
                ng2_nouislider_1.NouisliderModule
            ],
            providers: [
                forms_resolver_1.FormsValidationsResolver,
                forms_resolver_1.FormsExtendedControlsResolver,
                forms_resolver_1.FormsLayoutsResolver,
                forms_resolver_1.FormsWizardResolver,
                forms_resolver_1.MaterialFormsResolver
            ]
        })
    ], FormsModule);
    return FormsModule;
}());
exports.FormsModule = FormsModule;
//# sourceMappingURL=forms.module.js.map