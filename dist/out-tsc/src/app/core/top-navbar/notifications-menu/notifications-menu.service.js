"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NotificationsMenuService = /** @class */ (function () {
    function NotificationsMenuService() {
        this.notifications = [
            {
                type: 'social',
                title: 'Social',
                text: 'Important Message',
                time: 'JUST NOW'
            },
            {
                type: 'alert',
                title: 'Removed 6 items...',
                text: 'Important Message',
                time: 'Yesterday'
            },
            {
                type: 'promotion',
                title: 'Promotion',
                text: 'Important Message',
                time: 'June 4'
            },
            {
                type: 'update',
                title: 'Updates',
                text: 'Important Message',
                time: 'June 2'
            },
            {
                type: 'done',
                title: 'Completed 2 proyects',
                text: 'Important Message',
                time: 'May 28'
            },
            {
                type: 'contact',
                title: 'Added Jim to contact list',
                text: 'Important Message',
                time: 'May 25'
            }
        ];
    }
    NotificationsMenuService.prototype.getNotifications = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve(_this.notifications); }, 1000);
        });
    };
    NotificationsMenuService = __decorate([
        core_1.Injectable()
    ], NotificationsMenuService);
    return NotificationsMenuService;
}());
exports.NotificationsMenuService = NotificationsMenuService;
//# sourceMappingURL=notifications-menu.service.js.map