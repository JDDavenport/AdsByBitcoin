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
var AlertsPageComponent = /** @class */ (function () {
    function AlertsPageComponent(dialog) {
        this.dialog = dialog;
    }
    // You can pass the following options to the alert component:
    // {
    //   icon: 'check', // FontAwesome icon name
    //   iconColor: 'success' | 'failure', // icon color
    //   title: "Here's a message!", // Title of the modal
    //   text: 'The content, // Text of the modal
    //   options: false, // True will display yes or no buttons
    //   input: false, // True will show a text input
    //   button: 'Good', // Texto of the modal button
    //   time: undefined // Time you want the modal to live (ms)
    // }
    AlertsPageComponent.prototype.basicAlert = function () {
        var dialogRef = this.dialog.open(shared_1.AlertComponent, {
            data: {
                title: 'Thanks for sharing!',
                button: 'DOWNLOAD'
            }
        });
    };
    AlertsPageComponent.prototype.textAlert = function () {
        var dialogRef = this.dialog.open(shared_1.AlertComponent, {
            data: {
                title: 'Meet up with Alba',
                text: 'Today, 5:30 PM',
                button: 'YASSS!'
            }
        });
    };
    AlertsPageComponent.prototype.iconAlert = function () {
        var dialogRef = this.dialog.open(shared_1.AlertComponent, {
            data: {
                icon: 'check-circle',
                iconColor: 'success',
                title: 'Good job!',
                text: 'You are the winner',
                button: 'PLAY AGAIN'
            }
        });
    };
    AlertsPageComponent.prototype.optionsAlert = function () {
        var _this = this;
        var dialogRef = this.dialog.open(shared_1.AlertComponent, {
            data: {
                icon: 'exclamation-circle',
                iconColor: 'success',
                title: 'Do you want to submit your exam?',
                text: 'Think it twice',
                options: true
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.dialog.open(shared_1.AlertComponent, {
                    data: {
                        icon: 'check-circle',
                        iconColor: 'success',
                        title: 'Congrats!',
                        text: 'Your exam has been submitted successfully.',
                        button: 'OK'
                    }
                });
            }
        });
    };
    AlertsPageComponent.prototype.cancelledAlert = function () {
        var _this = this;
        var dialogRef = this.dialog.open(shared_1.AlertComponent, {
            data: {
                icon: 'exclamation-circle',
                iconColor: 'failure',
                title: 'Do you want to delete your file?',
                text: 'You will not be able to recover it',
                options: true
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.dialog.open(shared_1.AlertComponent, {
                    data: {
                        icon: 'check-circle',
                        iconColor: 'success',
                        title: 'Deleted',
                        text: 'Your file has been deleted.',
                        button: 'OK'
                    }
                });
            }
            else {
                _this.dialog.open(shared_1.AlertComponent, {
                    data: {
                        icon: 'times-circle',
                        iconColor: 'failure',
                        title: 'Canceled',
                        text: 'Your file is safe. You can find it on your inbox.',
                        button: 'OK'
                    }
                });
            }
        });
    };
    AlertsPageComponent.prototype.inputAlert = function () {
        var _this = this;
        var dialogRef = this.dialog.open(shared_1.AlertComponent, {
            data: {
                title: 'Please enter your name',
                input: true
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.dialog.open(shared_1.AlertComponent, {
                data: {
                    title: 'Your name is',
                    text: result,
                    button: 'OK'
                }
            });
        });
    };
    AlertsPageComponent.prototype.timedAlert = function () {
        var dialogRef = this.dialog.open(shared_1.AlertComponent, {
            data: {
                title: 'Auto close alert!',
                text: 'I will close in 2 seconds. Bye bye!',
                time: 2000
            }
        });
    };
    AlertsPageComponent = __decorate([
        core_1.Component({
            selector: 'app-alerts-page',
            templateUrl: './alerts.page.component.html',
            styleUrls: ['./styles/alerts.page.scss']
        }),
        __metadata("design:paramtypes", [material_1.MatDialog])
    ], AlertsPageComponent);
    return AlertsPageComponent;
}());
exports.AlertsPageComponent = AlertsPageComponent;
//# sourceMappingURL=alerts.page.component.js.map