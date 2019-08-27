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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(data) {
        this.data = data;
        this.type = false;
        this.dismissible = false;
        this.baseClass = 'notification alert';
        this.classes = '';
        if (data) {
            this.message = data.message;
            this.icon = data.icon;
            this.type = data.type;
            this.dismissible = data.dismissible;
        }
    }
    /** Dismisses the snack bar. */
    NotificationComponent.prototype.dismiss = function () {
        this.snackBarRef.dismiss();
    };
    NotificationComponent.prototype.ngOnInit = function () {
        this.classes = this.baseClass;
        this.classes += (this.dismissible ? ' alert-dismissible' : '');
        this.classes += (this.type ? ' alert-' + this.type : '');
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NotificationComponent.prototype, "message", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NotificationComponent.prototype, "text", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NotificationComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NotificationComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NotificationComponent.prototype, "dismissible", void 0);
    NotificationComponent = __decorate([
        core_1.Component({
            selector: 'app-notification',
            templateUrl: './notification.component.html',
            styleUrls: ['./styles/notification.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(0, core_1.Optional()), __param(0, core_1.Inject(material_1.MAT_SNACK_BAR_DATA)),
        __metadata("design:paramtypes", [Object])
    ], NotificationComponent);
    return NotificationComponent;
}());
exports.NotificationComponent = NotificationComponent;
//# sourceMappingURL=notification.component.js.map