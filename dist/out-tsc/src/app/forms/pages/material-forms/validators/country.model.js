"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var libphonenumber = require("google-libphonenumber");
var Country = /** @class */ (function () {
    function Country(iso, name) {
        this.iso = iso;
        this.name = name;
        var phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
        var PNF = libphonenumber.PhoneNumberFormat;
        var PNT = libphonenumber.PhoneNumberType;
        var countryExampleMobileNumber = phoneUtil.getExampleNumberForType(this.iso, PNT.MOBILE);
        var countryExampleFixedNumber = phoneUtil.getExampleNumberForType(this.iso, PNT.FIXED_LINE);
        // We need to define what kind of country phone number type we are going to use as a mask.
        // You can choose between many types including:
        //    - FIXED_LINE
        //    - MOBILE
        //    - For more types please refer to google libphonenumber repo: https://goo.gl/3yAFiV
        if (countryExampleMobileNumber) {
            var exampleMobileNumberFormatted = phoneUtil.format(countryExampleMobileNumber, PNF.NATIONAL);
            var exampleFixedNumberFormatted = phoneUtil.format(countryExampleFixedNumber, PNF.NATIONAL);
            // We need to define how are we going to format the phone number
            // You can choose between many formats including:
            //    - NATIONAL
            //    - INTERNATIONAL
            //    - E164
            //    - RFC3966
            this.sampleMobilePhone = exampleMobileNumberFormatted;
            this.sampleFixedPhone = exampleFixedNumberFormatted;
            this.code = '+' + countryExampleMobileNumber.getCountryCode();
        }
    }
    return Country;
}());
exports.Country = Country;
//# sourceMappingURL=country.model.js.map