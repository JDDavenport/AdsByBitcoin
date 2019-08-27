// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';
// import { FormGroup } from '@angular/forms';
// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styles: []
// })
// export class RegisterComponent implements OnInit {
//   errorMessage: any;
//   successMessage: any;
//   registerForm: FormGroup;
//   constructor(public authService:AuthService) { }
//   ngOnInit() {
//   }
//   tryRegister(value){
//     this.authService.doRegister(value)
//     .then(res => {
//       console.log(res);
//       this.errorMessage = "";
//       this.successMessage = "Your account has been created";
//     }, err => {
//       console.log(err);
//       this.errorMessage = err.message;
//       this.successMessage = "";
//     })
//   }
// }
//# sourceMappingURL=register.component.js.map