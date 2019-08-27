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
var auto_completer_service_1 = require("../../services/auto-completer.service");
var AutoCompleterPageComponent = /** @class */ (function () {
    function AutoCompleterPageComponent(autoCompleterService) {
        this.autoCompleterService = autoCompleterService;
        this.options = {
            simple: [],
            images: []
        };
    }
    AutoCompleterPageComponent.prototype.filter = function (event, type) {
        var _this = this;
        var input = event.target.value;
        if (input === '') {
            this.options[type] = [];
        }
        else {
            this.autoCompleterService.getData(input).then(function (res) {
                _this.options[type] = res;
            });
        }
    };
    AutoCompleterPageComponent = __decorate([
        core_1.Component({
            selector: 'app-auto-completer-page',
            templateUrl: './auto-completer.component.html',
            styleUrls: ['./styles/auto-completer.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [auto_completer_service_1.AutoCompleterService])
    ], AutoCompleterPageComponent);
    return AutoCompleterPageComponent;
}());
exports.AutoCompleterPageComponent = AutoCompleterPageComponent;
//# sourceMappingURL=auto-completer.component.js.map