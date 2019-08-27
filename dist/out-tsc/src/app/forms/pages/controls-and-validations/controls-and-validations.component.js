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
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var country_model_1 = require("./country.model");
var common_1 = require("@angular/common");
var shared_1 = require("../../../shared");
var ControlsAndValidationsPageComponent = /** @class */ (function () {
    function ControlsAndValidationsPageComponent(formBuilder, http, firebase, baseHref) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.http = http;
        this.firebase = firebase;
        this.baseHref = baseHref;
        // Countries for the phone validation
        this.countries = new Array();
        // Form validation messages
        this.validationMessages = {
            requiredText: [
                { type: 'required', message: 'This field is required.' }
            ],
            email: [
                { type: 'required', message: 'Email is required.' },
                { type: 'email', message: 'Email must be valid.' }
            ],
            password: [
                { type: 'required', message: 'Password is required.' }
            ],
            equal: [
                { type: 'areEqual', message: 'This fields should be equal.' }
            ],
            terms: [
                { type: 'pattern', message: 'You must accept terms and conditions.' }
            ],
            country: [
                { type: 'required', message: 'Country is required.' }
            ],
            phone: [
                { type: 'required', message: 'Phone is required.' },
                { type: 'validCountryPhone', message: 'Phone incorrect for the country selected' }
            ],
            textNumber: [
                { type: 'pattern', message: 'Number must be an integer.' }
            ],
            minLength: [
                { type: 'minlength', message: 'Min length is 11.' }
            ],
            maxLength: [
                { type: 'maxlength', message: 'Max length is 8.' }
            ],
            range: [
                { type: 'range', message: 'Range should be a number between 5 and 10.' }
            ],
            minValue: [
                { type: 'min', message: 'Min value is 4.' }
            ],
            maxValue: [
                { type: 'max', message: 'Max value is 5.' }
            ]
        };
        this.progress = '0';
        // Countries for the phone validation
        http.get(baseHref + '/assets/data/countries.json')
            .subscribe(function (data) {
            data.forEach(function (c) {
                _this.countries.push(new country_model_1.Country(c.code, c.name));
            });
        });
        var country = new forms_1.FormControl('', forms_1.Validators.required);
        this.form = formBuilder.group({
            domain_url: new forms_1.FormControl('', forms_1.Validators.required),
            sub_domain: new forms_1.FormControl(''),
            owner_email: new forms_1.FormControl('', forms_1.Validators.compose([
                forms_1.Validators.email,
                forms_1.Validators.required
            ])),
            image_width: new forms_1.FormControl('', forms_1.Validators.required),
            image_height: new forms_1.FormControl('', forms_1.Validators.required),
            terms: new forms_1.FormControl(true, forms_1.Validators.pattern('true')),
            country: country,
            nsfw_score_limit: new forms_1.FormControl('1', forms_1.Validators.pattern('[0-9]*')),
            purchase_price: new forms_1.FormControl('2', function (formControl) {
                var value = Number(formControl.value);
                return (value >= 4) ? undefined : { min: true };
            }),
            limit_reserve: new forms_1.FormControl('8', function (formControl) {
                var value = Number(formControl.value);
                return (value <= 50000) ? undefined : { max: true };
            })
        });
    }
    // Return the sample phone string for the selected country or an empty string if none selected
    ControlsAndValidationsPageComponent.prototype.samplePhone = function () {
        var iso = this.form.value.country;
        for (var _i = 0, _a = this.countries; _i < _a.length; _i++) {
            var country = _a[_i];
            if (country.iso === iso) {
                return (country.samplePhone);
            }
        }
        return '';
    };
    ControlsAndValidationsPageComponent.prototype.validateFields = function () {
        if (!this.form.valid) {
            // Mark the form and inputs as touched so the errors messages are shown
            this.form.markAsTouched();
            for (var control in this.form.controls) {
                if (this.form.controls.hasOwnProperty(control)) {
                    this.form.controls[control].markAsTouched();
                    this.form.controls[control].markAsDirty();
                }
            }
        }
    };
    ControlsAndValidationsPageComponent.prototype.updateProgress = function () {
        var controls = this.form.controls;
        var size = 0;
        var completed = 0;
        for (var key in controls) {
            if (controls.hasOwnProperty(key)) {
                size++;
                var control = controls[key];
                if ((control.value) && (control.dirty) && (control.valid)) {
                    completed++;
                }
            }
        }
        // Size - 4 to not consider the optional fields
        this.progress = (Math.floor((completed / (size - 4)) * 100)).toString();
    };
    ControlsAndValidationsPageComponent.prototype.onSubmit = function () {
        console.log('model-based form submitted');
        console.log(this.form.value);
        this.firebase.createAd(this.form.value);
    };
    ControlsAndValidationsPageComponent = __decorate([
        core_1.Component({
            selector: 'app-controls-and-validations-page',
            templateUrl: './controls-and-validations.component.html',
            styleUrls: ['./styles/controls-and-validations.scss']
        }),
        __param(3, core_1.Inject(common_1.APP_BASE_HREF)),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            http_1.HttpClient,
            shared_1.FirebaseService, String])
    ], ControlsAndValidationsPageComponent);
    return ControlsAndValidationsPageComponent;
}());
exports.ControlsAndValidationsPageComponent = ControlsAndValidationsPageComponent;
//# sourceMappingURL=controls-and-validations.component.js.map