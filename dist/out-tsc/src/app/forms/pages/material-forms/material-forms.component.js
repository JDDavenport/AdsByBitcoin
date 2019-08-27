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
var validators_1 = require("./validators");
var MaterialFormsPageComponent = /** @class */ (function () {
    function MaterialFormsPageComponent(fb) {
        this.fb = fb;
        this.parentErrorStateMatcher = new validators_1.ParentErrorStateMatcher();
        this.genders = [
            'Male',
            'Female',
            'Other'
        ];
        this.countries = [
            new validators_1.Country('UY', 'Uruguay'),
            new validators_1.Country('US', 'United States'),
            new validators_1.Country('AR', 'Argentina')
        ];
        this.validation_messages = {
            'fullname': [
                { type: 'required', message: 'Full name is required' }
            ],
            'bio': [
                { type: 'maxlength', message: 'Bio cannot be more than 256 characters long' },
            ],
            'gender': [
                { type: 'required', message: 'Please select your gender' },
            ],
            'birthday': [
                { type: 'required', message: 'Please insert your birthday' },
            ],
            'phone': [
                { type: 'required', message: 'Phone is required' },
                { type: 'validCountryPhone', message: 'Phone incorrect for the country selected' }
            ]
        };
        this.account_validation_messages = {
            'username': [
                { type: 'required', message: 'Username is required' },
                { type: 'minlength', message: 'Username must be at least 5 characters long' },
                { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
                { type: 'pattern', message: 'Your username must contain only numbers and letters' },
                { type: 'validUsername', message: 'Your username has already been taken' }
            ],
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Enter a valid email' }
            ],
            'confirm_password': [
                { type: 'required', message: 'Confirm password is required' },
                { type: 'areEqual', message: 'Password mismatch' }
            ],
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Password must be at least 5 characters long' },
                { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
            ],
            'terms': [
                { type: 'pattern', message: 'You must accept terms and conditions' }
            ]
        };
    }
    MaterialFormsPageComponent.prototype.ngOnInit = function () {
        this.createForms();
    };
    MaterialFormsPageComponent.prototype.createForms = function () {
        // matching passwords validation
        this.matching_passwords_group = new forms_1.FormGroup({
            password: new forms_1.FormControl('', forms_1.Validators.compose([
                forms_1.Validators.minLength(5),
                forms_1.Validators.required,
                forms_1.Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
            ])),
            confirm_password: new forms_1.FormControl('', forms_1.Validators.required)
        }, function (formGroup) {
            return validators_1.PasswordValidator.areEqual(formGroup);
        });
        // country & phone validation
        var country = new forms_1.FormControl(this.countries[0], forms_1.Validators.required);
        var phone = new forms_1.FormControl('', {
            validators: forms_1.Validators.compose([
                forms_1.Validators.required,
                validators_1.PhoneValidator.validCountryPhone(country)
            ])
        });
        this.country_phone_group = new forms_1.FormGroup({
            country: country,
            phone: phone
        });
        // user details form validations
        this.userDetailsForm = this.fb.group({
            fullname: ['', forms_1.Validators.required],
            bio: ['', forms_1.Validators.maxLength(256)],
            birthday: ['', forms_1.Validators.required],
            gender: new forms_1.FormControl(this.genders[0], forms_1.Validators.required),
            country_phone: this.country_phone_group
        });
        // user links form validations
        this.accountDetailsForm = this.fb.group({
            username: new forms_1.FormControl('', forms_1.Validators.compose([
                validators_1.UsernameValidator.validUsername,
                forms_1.Validators.maxLength(25),
                forms_1.Validators.minLength(5),
                forms_1.Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
                forms_1.Validators.required
            ])),
            email: new forms_1.FormControl('', forms_1.Validators.compose([
                forms_1.Validators.required,
                forms_1.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            matching_passwords: this.matching_passwords_group,
            terms: new forms_1.FormControl(false, forms_1.Validators.pattern('true'))
        });
    };
    MaterialFormsPageComponent.prototype.onSubmitAccountDetails = function (value) {
        console.log(value);
    };
    MaterialFormsPageComponent.prototype.onSubmitUserDetails = function (value) {
        console.log(value);
    };
    MaterialFormsPageComponent = __decorate([
        core_1.Component({
            selector: 'app-material-forms-page',
            templateUrl: './material-forms.component.html',
            styleUrls: ['./styles/material-forms.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], MaterialFormsPageComponent);
    return MaterialFormsPageComponent;
}());
exports.MaterialFormsPageComponent = MaterialFormsPageComponent;
//# sourceMappingURL=material-forms.component.js.map