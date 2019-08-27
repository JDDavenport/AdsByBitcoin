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
        var countryExampleNumber = phoneUtil.getExampleNumberForType(this.iso, PNT.MOBILE);
        // We need to define what kind of country phone number type we are going to use as a mask.
        // You can choose between many types including:
        //    - FIXED_LINE
        //    - MOBILE
        //    - For more types please refer to google libphonenumber repo: https://goo.gl/3yAFiV
        if (countryExampleNumber) {
            var exampleNumberFormatted = phoneUtil.format(countryExampleNumber, PNF.NATIONAL);
            // We need to define how are we going to format the phone number
            // You can choose between many formats including:
            //    - NATIONAL
            //    - INTERNATIONAL
            //    - E164
            //    - RFC3966
            this.samplePhone = exampleNumberFormatted;
            this.code = '+' + countryExampleNumber.getCountryCode();
            // Now let's transform the formatted example number into a valid text-mask
            // Inspired in text-mask example (https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#included-conformtomask)
            this.phoneMask = this.getMaskFromString(exampleNumberFormatted);
        }
    }
    Country.prototype.getMaskFromString = function (s) {
        var stringChars = s.split('');
        var digitRegExp = new RegExp(/\d/);
        var mask = stringChars.map(function (char) {
            // Replace any digit with a digit RegExp
            return (digitRegExp.test(char)) ? digitRegExp : char;
        });
        return mask;
    };
    return Country;
}());
exports.Country = Country;
//# sourceMappingURL=country.model.js.map