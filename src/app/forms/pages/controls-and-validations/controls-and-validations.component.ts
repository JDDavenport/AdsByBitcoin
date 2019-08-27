import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PhoneValidator } from '../../validators/phone.validator';
import { Country } from './country.model';
import { APP_BASE_HREF } from '@angular/common';
import { AuthService } from '../../../auth/auth.service';
import { FirebaseService } from '../../../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-controls-and-validations-page',
  templateUrl: './controls-and-validations.component.html',
  styleUrls: ['./styles/controls-and-validations.scss']
})
export class ControlsAndValidationsPageComponent {
  // Countries for the phone validation
  countries = new Array<Country>();

  // Form validation messages
  validationMessages = {
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

  // Full form
  form: FormGroup;
  progress = '0';

  constructor(
    public formBuilder: FormBuilder,
    private http: HttpClient,
    public firebase: FirebaseService,
    public auth: AuthService,
    public router: Router,
    @Inject(APP_BASE_HREF) private baseHref: string
  ) {

    // Countries for the phone validation
    http.get<any>(baseHref + '/assets/data/countries.json')
      .subscribe(
        data => {
          data.forEach((c) => {
            this.countries.push(new Country(c.code, c.name));
          });
        }
      );

    const country = new FormControl('', Validators.required);
    this.form = formBuilder.group({
      domain_url: new FormControl('', Validators.required),
      sub_domain: new FormControl(''),
      owner_email: new FormControl('', Validators.compose([
        Validators.email,
        Validators.required
      ])),
      image_width: new FormControl('', Validators.required),
      image_height: new FormControl('', Validators.required),
      terms: new FormControl(true, Validators.pattern('true')),
      country,
      nsfw_score_limit: new FormControl('1', Validators.pattern('[0-9]*')),
      purchase_price: new FormControl('2', formControl => {
        const value = Number(formControl.value);

        return (value >= 4) ? undefined : { min: true };
      }),
      limit_reserve: new FormControl('8', formControl => {
        const value = Number(formControl.value);

        return (value <= 50000) ? undefined : { max: true };
      })
    });
  }

  // Return the sample phone string for the selected country or an empty string if none selected
  samplePhone(): string {
    const iso = this.form.value.country;
    for (const country of this.countries) {
      if (country.iso === iso) {
        return (country.samplePhone);
      }
    }

    return '';
  }

  validateFields(): void {
    if (!this.form.valid) {
      // Mark the form and inputs as touched so the errors messages are shown
      this.form.markAsTouched();
      for (const control in this.form.controls) {
        if (this.form.controls.hasOwnProperty(control)) {
          this.form.controls[control].markAsTouched();
          this.form.controls[control].markAsDirty();
        }
      }
    }
  }

  updateProgress(): void {
    const controls = this.form.controls;
    let size = 0;
    let completed = 0;
    for (const key in controls) {
      if (controls.hasOwnProperty(key)) {
        size++;
        const control = controls[key];
        if ((control.value) && (control.dirty) && (control.valid)) {
          completed++;
        }
      }
    }

    // Size - 4 to not consider the optional fields
    this.progress = (Math.floor((completed / (size - 4)) * 100)).toString();
  }

  async onSubmit() {
    // async createAd(value){
    // console.log("inCreateAd"+value)
    // let size; 
    //   this.db.collection('ads').get().toPromise().then(snap => {
    //     size = snap.size // will return the collection size
    //  });
    //  var countOf = {
    //    ads : size
    //  }
    // console.log("inCreateAd"+value)

    //  this.db.collection('count_of').add(countOf)
    let today = new Date()
    let userC = await this.auth.getUser()
    //  let userID=""
    //  userC.then(user => UserID: user.uid )
    // console.log("inCreateAd"+value)

    console.log('model-based form submitted');
    console.log(this.form.value);
    let newForm = {
      domain_url: this.form.value.domain_url,
      owner_email: this.form.value.owner_email,
      available: 'Yes',
      impression_share_24_hour: 0,
      impressions_24_hour: 0,
      clicks_24_hour: 0,
      ctr_24_hour: 0,
      creation_date: today,
      sub_domain: this.form.value.sub_domain,
      image_height: this.form.value.image_height,
      image_width: this.form.value.image_width,
      image_size_limit: 10000,
      country: this.form.value.country,
      nsfw_score_limit: this.form.value.nsfw_score_limit,
      demographic: "Family",
      terms: this.form.value.terms,
      website_categories: [],
      purchase_price: this.form.value.purchase_price,
      limit_reserve: this.form.value.limit_reserve,
      fee: "25",
      next_fee_date: today.setMonth(today.getMonth() + 1),
      trend_30_days: 0,
      current_lease: " ",
      owned_by: userC.uid
    }
    console.log(newForm)
  
    this.firebase.createAd(newForm)
    console.log('testing')
    return this.router.navigate(['/tables/smart']);
    console.log('after')

  }
}
