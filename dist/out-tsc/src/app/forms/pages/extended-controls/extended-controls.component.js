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
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var COMMA = 188;
var ENTER = 13;
var ExtendedControlsPageComponent = /** @class */ (function () {
    function ExtendedControlsPageComponent(fb, platformId) {
        this.platformId = platformId;
        // Tags inputs
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [COMMA, ENTER];
        this.chips = {
            regular: [
                'MINIMAL',
                'LIGHT',
                'NEW',
                'FRIENDS'
            ],
            filled: [
                'MINIMAL',
                'LIGHT',
                'NEW',
                'FRIENDS'
            ]
        };
        this.isBrowser = common_1.isPlatformBrowser(platformId);
        this.controlsForm = fb.group({
            help: new forms_1.FormControl(''),
            password: new forms_1.FormControl(''),
            placeholder: new forms_1.FormControl(''),
            disabled: new forms_1.FormControl({ value: 'Disabled', disabled: true }),
            date: new forms_1.FormControl({ value: (new Date()) }),
            color: new forms_1.FormControl(''),
            message: new forms_1.FormControl(''),
            radio: new forms_1.FormControl(''),
            checkbox1: new forms_1.FormControl(''),
            checkbox2: new forms_1.FormControl(''),
            checkbox3: new forms_1.FormControl(''),
            checkbox4: new forms_1.FormControl(false),
            checkbox5: new forms_1.FormControl(true),
            checkbox6: new forms_1.FormControl({ value: false, disabled: true }),
            checkbox7: new forms_1.FormControl({ value: true, disabled: true }),
            radio1: new forms_1.FormControl('second'),
            radio2: new forms_1.FormControl({ value: 'fourth', disabled: true }),
            success: new forms_1.FormControl(''),
            error: new forms_1.FormControl(''),
            addon1: new forms_1.FormControl(''),
            addon2: new forms_1.FormControl(''),
            column1: new forms_1.FormControl(''),
            column2: new forms_1.FormControl(''),
            column3: new forms_1.FormControl(''),
            column4: new forms_1.FormControl(''),
            column5: new forms_1.FormControl(''),
            animal: new forms_1.FormControl('')
        });
        this.formElements = fb.group({
            nouislider: [[20, 50]],
            slider: new forms_1.FormControl('30')
        });
    }
    ExtendedControlsPageComponent.prototype.add = function (event, chipList) {
        var input = event.input;
        var value = event.value;
        if ((value || '').trim()) {
            this.chips[chipList].push(value.trim());
        }
        if (input) {
            input.value = '';
        }
    };
    ExtendedControlsPageComponent.prototype.remove = function (chip, chipList) {
        var index = this.chips[chipList].indexOf(chip);
        if (index >= 0) {
            this.chips[chipList].splice(index, 1);
        }
    };
    ExtendedControlsPageComponent = __decorate([
        core_1.Component({
            selector: 'app-extended-controls-page',
            templateUrl: './extended-controls.component.html',
            styleUrls: ['./styles/extended-controls.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(1, core_1.Inject(core_1.PLATFORM_ID)),
        __metadata("design:paramtypes", [forms_1.FormBuilder, Object])
    ], ExtendedControlsPageComponent);
    return ExtendedControlsPageComponent;
}());
exports.ExtendedControlsPageComponent = ExtendedControlsPageComponent;
//# sourceMappingURL=extended-controls.component.js.map