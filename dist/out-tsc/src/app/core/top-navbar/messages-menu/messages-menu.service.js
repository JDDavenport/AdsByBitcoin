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
var common_1 = require("@angular/common");
var MessagesMenuService = /** @class */ (function () {
    function MessagesMenuService(baseHref) {
        this.baseHref = baseHref;
        this.baseUrl = '';
        this.messages = [
            {
                image: this.baseUrl + '/assets/imgs/profiles/profile1.jpeg',
                username: 'Juana de Arco',
                title: 'New Lead',
                text: 'Add this new lead to your list.',
                time: 'JUST NOW'
            },
            {
                image: this.baseUrl + '/assets/imgs/profiles/profile4.jpeg',
                username: 'Harley Wapasha',
                title: 'Congrats! 100 users',
                text: 'You reached your monthly goal.',
                time: 'Yesterday'
            },
            {
                image: this.baseUrl + '/assets/imgs/profiles/profile3.jpeg',
                username: 'Sandra Adams',
                title: 'New message',
                text: 'Hi Henry, remember to add...',
                time: 'June 4'
            },
            {
                image: this.baseUrl + '/assets/imgs/profiles/profile2.jpeg',
                username: 'Ali Connors',
                title: 'Important message',
                text: 'Hello there',
                time: 'June 2'
            }
        ];
        this.baseUrl = baseHref;
    }
    MessagesMenuService.prototype.getMessages = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve(_this.messages); }, 1000);
        });
    };
    MessagesMenuService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(common_1.APP_BASE_HREF)),
        __metadata("design:paramtypes", [String])
    ], MessagesMenuService);
    return MessagesMenuService;
}());
exports.MessagesMenuService = MessagesMenuService;
//# sourceMappingURL=messages-menu.service.js.map