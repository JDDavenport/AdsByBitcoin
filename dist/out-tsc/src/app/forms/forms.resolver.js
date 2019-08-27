"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FormsValidationsResolver = /** @class */ (function () {
    function FormsValidationsResolver() {
    }
    FormsValidationsResolver.prototype.resolve = function () {
        return new Promise(function (resolve, reject) {
            var breadcrumbs = [
                { url: '/forms/controls-and-validations', label: 'Form Controls & Validations' }
            ];
            return resolve({
            // breadcrumbs: breadcrumbs
            });
        });
    };
    FormsValidationsResolver = __decorate([
        core_1.Injectable()
    ], FormsValidationsResolver);
    return FormsValidationsResolver;
}());
exports.FormsValidationsResolver = FormsValidationsResolver;
var FormsExtendedControlsResolver = /** @class */ (function () {
    function FormsExtendedControlsResolver() {
    }
    FormsExtendedControlsResolver.prototype.resolve = function () {
        return new Promise(function (resolve, reject) {
            var breadcrumbs = [
                { url: '/forms/extended-controls', label: 'Form Extended Controls' }
            ];
            return resolve({
            // breadcrumbs: breadcrumbs
            });
        });
    };
    FormsExtendedControlsResolver = __decorate([
        core_1.Injectable()
    ], FormsExtendedControlsResolver);
    return FormsExtendedControlsResolver;
}());
exports.FormsExtendedControlsResolver = FormsExtendedControlsResolver;
var FormsLayoutsResolver = /** @class */ (function () {
    function FormsLayoutsResolver() {
    }
    FormsLayoutsResolver.prototype.resolve = function () {
        return new Promise(function (resolve, reject) {
            var breadcrumbs = [
                { url: '/forms/sample-layouts', label: 'Form Sample Layouts' }
            ];
            return resolve({
            // breadcrumbs: breadcrumbs
            });
        });
    };
    FormsLayoutsResolver = __decorate([
        core_1.Injectable()
    ], FormsLayoutsResolver);
    return FormsLayoutsResolver;
}());
exports.FormsLayoutsResolver = FormsLayoutsResolver;
var FormsWizardResolver = /** @class */ (function () {
    function FormsWizardResolver() {
    }
    FormsWizardResolver.prototype.resolve = function () {
        return new Promise(function (resolve, reject) {
            var breadcrumbs = [
                { url: '/forms/wizard', label: 'Form Wizard' }
            ];
            return resolve({
            // breadcrumbs: breadcrumbs
            });
        });
    };
    FormsWizardResolver = __decorate([
        core_1.Injectable()
    ], FormsWizardResolver);
    return FormsWizardResolver;
}());
exports.FormsWizardResolver = FormsWizardResolver;
var MaterialFormsResolver = /** @class */ (function () {
    function MaterialFormsResolver() {
    }
    MaterialFormsResolver.prototype.resolve = function () {
        return new Promise(function (resolve, reject) {
            var breadcrumbs = [
                { url: '/forms/material-forms', label: 'Material Forms' }
            ];
            return resolve({
            // breadcrumbs: breadcrumbs
            });
        });
    };
    MaterialFormsResolver = __decorate([
        core_1.Injectable()
    ], MaterialFormsResolver);
    return MaterialFormsResolver;
}());
exports.MaterialFormsResolver = MaterialFormsResolver;
//# sourceMappingURL=forms.resolver.js.map