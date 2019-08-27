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
var WizardPageComponent = /** @class */ (function () {
    function WizardPageComponent(fb) {
        // Output for passing the submited form data along
        this.formData = new core_1.EventEmitter();
        this.formSubmitted = false;
        // Forms and active state for each step
        this.steps = [
            { form: undefined, current: true },
            { form: undefined, current: false },
            { form: undefined, current: false }
        ];
        // The current visible step
        this.currentStep = 0;
        // Progress var init
        this.progress = '0';
        // Checkbox images for step 2
        this.optionsImages = [
            { img: '../../../../assets/imgs/forms-wizard/followers.png', value: 'followers' },
            { img: '../../../../assets/imgs/forms-wizard/login.png', value: 'login' },
            { img: '../../../../assets/imgs/forms-wizard/places.jpg', value: 'places' },
            { img: '../../../../assets/imgs/forms-wizard/profile.png', value: 'profile' }
        ];
        // Validation error messages
        this.validationMessages = {
            images: [
                { type: 'required', message: 'Select at least one option.' }
            ],
            description: [
                { type: 'required', message: 'Description is required.' }
            ],
            firstName: [
                { type: 'required', message: 'First name is required.' }
            ],
            email: [
                { type: 'required', message: 'Email is required.' },
                { type: 'email', message: 'Enter a valid email.' }
            ],
            budget: [
                { type: 'pattern', message: 'The budget must be an integer number.' }
            ]
        };
        // Init for the form groups in each step of the wizard
        this.steps[0].form = new forms_1.FormGroup({
            firstName: new forms_1.FormControl('', forms_1.Validators.required),
            lastName: new forms_1.FormControl(''),
            email: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.email, forms_1.Validators.required]))
        });
        this.steps[1].form = new forms_1.FormGroup({
            description: new forms_1.FormControl('', forms_1.Validators.required),
            framework: new forms_1.FormControl(''),
            language: new forms_1.FormControl(''),
            bootstrap: new forms_1.FormControl(''),
            budget: new forms_1.FormControl('', forms_1.Validators.pattern('[0-9]*'))
        });
        this.steps[2].form = new forms_1.FormGroup({ images: new forms_1.FormArray([]) }, function (a) {
            return a.controls['images'].controls.length > 0 ? undefined : { required: true };
        });
        // Init the Main form with all the form groups of all the steps
        this.form = fb.group({
            step0FormGroup: this.steps[0].form,
            step1FormGroup: this.steps[1].form,
            step2FormGroup: this.steps[2].form
        });
    }
    // Checkboxes values for step 2
    WizardPageComponent.prototype.multiOptionsChange = function (option, isChecked) {
        var step = this.form.controls.step2FormGroup;
        var optionFormArray = step.controls.images;
        optionFormArray.markAsTouched();
        if (isChecked) {
            optionFormArray.push(new forms_1.FormControl(option));
        }
        else {
            var index = optionFormArray.controls.findIndex(function (x) { return x.value === option; });
            optionFormArray.removeAt(index);
        }
    };
    // Change step function, to be called on the 'submission' of each step
    // 'change' indicates the length of the step
    WizardPageComponent.prototype.changeStep = function (change) {
        if (!this.formSubmitted) {
            // If we want to move forwards (change > 0) the previous steps must be valid
            change = this.validateSteps(this.currentStep, change);
            this.steps[this.currentStep].current = false;
            this.currentStep += change;
            this.steps[this.currentStep].current = true;
            this.progress = (Math.floor((this.currentStep / (this.steps.length - 1)) * 100)).toString();
        }
    };
    WizardPageComponent.prototype.goToStep = function (step) {
        this.changeStep(step - this.currentStep);
    };
    WizardPageComponent.prototype.validateSteps = function (currentStep, change) {
        for (var i = currentStep; i < (currentStep + change); i++) {
            if (!this.steps[i].form.valid) {
                // Mark the step as touched so the errors messages are shown
                this.steps[currentStep].form.markAsTouched();
                for (var control in this.steps[currentStep].form.controls) {
                    if (this.steps[currentStep].form.controls.hasOwnProperty(control)) {
                        this.steps[currentStep].form.controls[control].markAsTouched();
                    }
                }
                return (change = i - currentStep);
            }
        }
        return (change);
    };
    // On submit to be called by the form submission
    WizardPageComponent.prototype.doSubmit = function () {
        var data = {};
        if (this.validateSteps(this.currentStep, 1) === 1) {
            for (var formGroup in this.form.value) { // Get all the steps data together
                if (Object.prototype.hasOwnProperty.call(this.form.value, formGroup)) {
                    var formData = this.form.value[formGroup].value;
                    data = Object.assign(data, formData);
                }
            }
            this.formData.emit(data); // Emit the complete data set
            this.progress = '100'; // Update the progress bar
            this.currentStep++;
            this.formSubmitted = true;
        }
    };
    WizardPageComponent.prototype.finish = function () {
        // console.log('Wizard finished!');
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], WizardPageComponent.prototype, "formData", void 0);
    WizardPageComponent = __decorate([
        core_1.Component({
            selector: 'app-wizard-page',
            templateUrl: './wizard.component.html',
            styleUrls: ['./styles/_forms-wizard.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], WizardPageComponent);
    return WizardPageComponent;
}());
exports.WizardPageComponent = WizardPageComponent;
//# sourceMappingURL=wizard.component.js.map