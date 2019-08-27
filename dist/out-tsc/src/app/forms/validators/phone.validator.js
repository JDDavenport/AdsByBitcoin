"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var google_libphonenumber_1 = require("google-libphonenumber");
var PhoneValidator = /** @class */ (function () {
    function PhoneValidator() {
    }
    // Inspired on: https://github.com/yuyang041060120/ng2-validation/blob/master/src/equal-to/validator.ts
    PhoneValidator.validCountryPhone = function (countryControl) {
        var subscribe = false;
        return function (phoneControl) {
            if (!subscribe) {
                subscribe = true;
                countryControl.valueChanges.subscribe(function () {
                    phoneControl.updateValueAndValidity();
                });
            }
            if (phoneControl.value !== '') {
                try {
                    var phoneUtil = google_libphonenumber_1.default.PhoneNumberUtil.getInstance();
                    var phoneNumber = '' + phoneControl.value + '';
                    var region = countryControl.value;
                    var pNumber = phoneUtil.parse(phoneNumber, region);
                    var isValidNumber = phoneUtil.isValidNumber(pNumber);
                    if (isValidNumber) {
                        return undefined;
                    }
                }
                catch (e) {
                    // console.log(e);
                    return {
                        validCountryPhone: true
                    };
                }
                return {
                    validCountryPhone: true
                };
            }
            else {
                return undefined;
            }
        };
    };
    return PhoneValidator;
}());
exports.PhoneValidator = PhoneValidator;
//# sourceMappingURL=phone.validator.js.map