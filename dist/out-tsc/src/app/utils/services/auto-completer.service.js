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
var http_1 = require("@angular/common/http");
var AutoCompleterService = /** @class */ (function () {
    function AutoCompleterService(http) {
        this.http = http;
        this.options = undefined;
    }
    AutoCompleterService.prototype.getData = function (filter) {
        var _this = this;
        if (this.options) {
            return new Promise(function (resolve, reject) {
                resolve(_this.filterOptions(filter));
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                _this.http.get('../../../../assets/data/autocomplete.json')
                    .subscribe(function (data) {
                    _this.options = data;
                    resolve(_this.filterOptions(filter));
                }, function (err) { return reject(); });
            });
        }
    };
    AutoCompleterService.prototype.filterOptions = function (filter) {
        var _this = this;
        return (this.options.filter(function (option) { return _this.fuzzysearch(filter, option.title); }));
    };
    // Credit: https://github.com/bevacqua/fuzzysearch
    AutoCompleterService.prototype.fuzzysearch = function (needle, haystack) {
        var hlen = haystack.length;
        var nlen = needle.length;
        if (nlen > hlen) {
            return false;
        }
        needle = needle.toLowerCase();
        haystack = haystack.toLowerCase();
        var nIdx = 0;
        var hIdx = 0;
        while (nIdx < nlen) {
            if (hIdx >= hlen) {
                return false;
            }
            if (needle.charCodeAt(nIdx) === haystack.charCodeAt(hIdx++)) {
                nIdx++;
            }
        }
        return true;
    };
    AutoCompleterService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AutoCompleterService);
    return AutoCompleterService;
}());
exports.AutoCompleterService = AutoCompleterService;
//# sourceMappingURL=auto-completer.service.js.map