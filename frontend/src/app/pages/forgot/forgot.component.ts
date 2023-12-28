import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent  {


email = new FormControl('', [Validators.required, Validators.email]);
  newPassword = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required]);
  error: string | null = null;

  formGroup = new FormGroup({
    email: this.email,
    newPassword: this.newPassword,
    confirmPassword: this.confirmPassword
  });

  handleSubmit(): void {
    if (this.formGroup.invalid) {
      this.error = 'All fields are required';
      return;
    }

    if (this.newPassword.value !== this.confirmPassword.value) {
      this.error = 'Passwords do not match';
      return;
    }

    // Reset fields
    this.formGroup.reset();
    this.error = null;

    // Handle success (for example, show a success message)
    window.alert('Password reset successful!');
  }
}