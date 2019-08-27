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
var forms_1 = require("@angular/forms");
var SampleLayoutsPageComponent = /** @class */ (function () {
    function SampleLayoutsPageComponent(fb) {
        this.formStacked = fb.group({
            email: new forms_1.FormControl(''),
            password: new forms_1.FormControl(''),
            newsletter: new forms_1.FormControl(true)
        });
        this.formHorizontal = fb.group({
            email: new forms_1.FormControl(''),
            password: new forms_1.FormControl(''),
            remember: new forms_1.FormControl(true)
        });
        this.formRegister = fb.group({
            email: new forms_1.FormControl('', forms_1.Validators.required),
            password: new forms_1.FormControl('', forms_1.Validators.required),
            cpassword: new forms_1.FormControl('', forms_1.Validators.required),
            newsletter: new forms_1.FormControl(true)
        });
        this.formLogin = fb.group({
            email: new forms_1.FormControl('', forms_1.Validators.required),
            password: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    SampleLayoutsPageComponent = __decorate([
        core_1.Component({
            selector: 'app-sample-layouts-page',
            templateUrl: './sample-layouts.component.html',
            styleUrls: ['./styles/sample-layouts.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], SampleLayoutsPageComponent);
    return SampleLayoutsPageComponent;
}());
exports.SampleLayoutsPageComponent = SampleLayoutsPageComponent;
//# sourceMappingURL=sample-layouts.component.js.map