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
var shared_1 = require("../../../shared");
var NotificationsPageComponent = /** @class */ (function () {
    function NotificationsPageComponent(snackBar) {
        this.snackBar = snackBar;
    }
    NotificationsPageComponent.prototype.showNotification = function (vpos, hpos, type, icon) {
        if (icon === void 0) { icon = ''; }
        // for more info about Angular Material snackBar check: https://material.angular.io/components/snack-bar/overview
        this.mySnackBarRef = this.snackBar.openFromComponent(shared_1.NotificationComponent, {
            data: {
                message: 'This is a nice notification positioned in the ' + vpos + ' ' + hpos,
                icon: icon,
                type: type,
                dismissible: true
                // you can add everything you want here
            },
            duration: 2000,
            horizontalPosition: hpos,
            verticalPosition: vpos,
            panelClass: ['notification-wrapper']
        });
        // this is to be able to close it from the NotificationComponent
        this.mySnackBarRef.instance.snackBarRef = this.mySnackBarRef;
    };
    NotificationsPageComponent = __decorate([
        core_1.Component({
            selector: 'app-notifications-page',
            templateUrl: './notifications.page.component.html',
            styleUrls: ['./styles/notifications.page.scss']
        }),
        __metadata("design:paramtypes", [material_1.MatSnackBar])
    ], NotificationsPageComponent);
    return NotificationsPageComponent;
}());
exports.NotificationsPageComponent = NotificationsPageComponent;
//# sourceMappingURL=notifications.page.component.js.map