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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Error404PageResolver = /** @class */ (function () {
    function Error404PageResolver() {
    }
    Error404PageResolver.prototype.resolve = function () {
        return new Promise(function (resolve, reject) {
            var breadcrumbs = [
                { url: '/', label: '404' }
            ];
            return resolve({
            // breadcrumbs: breadcrumbs
            });
        });
    };
    Error404PageResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], Error404PageResolver);
    return Error404PageResolver;
}());
exports.Error404PageResolver = Error404PageResolver;
//# sourceMappingURL=error-404-page.resolver.js.map