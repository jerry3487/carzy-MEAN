// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from '../../services/auth.service';
// import { MatSnackBar } from '@angular/material/snack-bar';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css'],
// })
// export class RegisterComponent implements OnInit {
//   form: FormGroup;
//   loading = false;
//   submitted = false;
//   returnUrl: string;
//   captchaValue: any;
//   error: string | null = null;

//   constructor(
//     private formBuilder: FormBuilder,
//     private route: ActivatedRoute,
//     private router: Router,
//     private snackBar: MatSnackBar,
//     private authService: AuthService
//   ) {
//     if (this.authService.currentUserValue) {
//       this.router.navigate(['/']);
//     }

//     this.form = this.formBuilder.group({
//       name: ['', Validators.required],
//       email: ['', Validators.email],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//       repeatPassword: ['', Validators.required],
//       captcha: ['', [Validators.required, this.captchaValidator.bind(this)]],
//     });
//     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
//   }
 



//   ngOnInit() {
//     this.generateCaptcha(); 
   
//   }






// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from '../../services/auth.service';
// import { MatSnackBar } from '@angular/material/snack-bar';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css'],
// })
// export class RegisterComponent implements OnInit {
//   form: FormGroup;
//   loading = false;
//   submitted = false;
//   returnUrl: string;
//   captchaValue: any;
//   error: string | null = null;

//   constructor(
//     private formBuilder: FormBuilder,
//     private route: ActivatedRoute,
//     private router: Router,
//     private snackBar: MatSnackBar,
//     private authService: AuthService
//   ) {
//     if (this.authService.currentUserValue) {
//       this.router.navigate(['/']);
//     }

//     this.form = this.formBuilder.group({
//       name: ['', Validators.required],
//       email: ['', Validators.email],
//       password: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(10)]],
//       repeatPassword: ['', Validators.required],
//       captcha: ['', [Validators.required, this.captchaValidator.bind(this)]],
//     });
//     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
//   }

//   ngOnInit() {
//     this.generateCaptcha();
//   }

//   generateCaptcha() {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';
//     let captcha = '';
//     for (let i = 0; i < 6; i++) {
//       captcha += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     this.captchaValue = captcha;
//   }

//   captchaValidator(control: { value: any; }) {
//     const inputCaptcha = control.value;
//     if (inputCaptcha === this.captchaValue) {
//       return null; // captcha is valid
//     } else {
//       return { invalidCaptcha: true }; // captcha is invalid
//     }
//   }

//   get f() { return this.form.controls; }  // helper method to access form controls easily

//   onSubmit() {
//     this.submitted = true;
    
//     if (this.form.invalid) {
//       return;
//     }

//     if (this.f.password.value !== this.f.repeatPassword.value) {
//       this.error = 'Passwords do not match';
//       return;
//     }

//     const { name, email, password } = this.form.value;
//     this.loading = true;
//     this.authService
//       .register(name, email, password)
//       .subscribe(
//         (data) => {
//           this.router.navigate([this.returnUrl]);
//         },
//         (error) => {
//           this.snackBar.open(error, '', { panelClass: 'error-snackbar' });
//           this.loading = false;
//         }
//       );
//   }
// }










import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  captchaValue: any;
  error: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private authService: AuthService
  ) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      repeatPassword: ['', Validators.required],
      captcha: ['', [Validators.required, this.captchaValidator.bind(this)]],
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngOnInit() {
    this.generateCaptcha(); 
  }

  generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    this.captchaValue = captcha;
  }

  captchaValidator(control: { value: any; }) {
    const inputCaptcha = control.value;
    if (inputCaptcha === this.captchaValue) {
      return null; // captcha is valid
    } else {
      return { invalidCaptcha: true }; // captcha is invalid
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    const { name, email, password, repeatPassword } = this.form.value;

    if (password !== repeatPassword) {
      this.error = 'Passwords do not match';
      return;
    }

    this.loading = true;
    this.authService
      .register(name, email, password)
      .subscribe(
        (data) => {
          this.router.navigate([this.returnUrl]);
        },
        (error) => {
          this.snackBar.open(error, '', { panelClass: 'error-snackbar' });
          this.loading = false;
        }
      );
  }
}
