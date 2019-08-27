"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent() {
        this.searchBar = new forms_1.FormControl();
        this.options = [
            'Charts',
            'Dashboard',
            'Forms',
            'Layouts',
            'Tables',
            'Utils'
        ];
    }
    SearchBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.searchBar.valueChanges
            .pipe(operators_1.startWith(undefined), operators_1.map(function (val) { return val ? _this.filter(val) : _this.options.slice(); }));
    };
    SearchBarComponent.prototype.filter = function (val) {
        return this.options.filter(function (option) { return new RegExp("^" + val, 'gi').test(option); });
    };
    SearchBarComponent = __decorate([
        core_1.Component({
            selector: 'app-search-bar',
            styleUrls: ['./styles/search-bar.scss'],
            templateUrl: './search-bar.component.html'
        })
    ], SearchBarComponent);
    return SearchBarComponent;
}());
exports.SearchBarComponent = SearchBarComponent;
//# sourceMappingURL=search-bar.component.js.map