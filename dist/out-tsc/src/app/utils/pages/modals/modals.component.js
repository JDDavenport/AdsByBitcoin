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
var material_1 = require("@angular/material");
var login_component_1 = require("./templates/login/login.component");
var register_component_1 = require("./templates/register/register.component");
var ModalsPageComponent = /** @class */ (function () {
    function ModalsPageComponent(dialog) {
        this.dialog = dialog;
    }
    ModalsPageComponent.prototype.registerModal = function () {
        var dialogRef = this.dialog.open(register_component_1.RegisterModalComponent);
    };
    ModalsPageComponent.prototype.ngOnInit = function () {
        console.log('test');
        var dialogRef = this.dialog.open(register_component_1.RegisterModalComponent);
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    };
    ModalsPageComponent.prototype.loginModal = function () {
        var _this = this;
        var dialogRef = this.dialog.open(login_component_1.LoginModalComponent);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.selectedOption = result;
        });
    };
    ModalsPageComponent = __decorate([
        core_1.Component({
            selector: 'app-modals-page',
            templateUrl: './modals.component.html',
            styleUrls: ['./styles/modals.scss']
        }),
        __metadata("design:paramtypes", [material_1.MatDialog])
    ], ModalsPageComponent);
    return ModalsPageComponent;
}());
exports.ModalsPageComponent = ModalsPageComponent;
//# sourceMappingURL=modals.component.js.map