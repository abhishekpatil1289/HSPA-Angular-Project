import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/service/user-service.service';
import { AlertifyService } from 'src/app/service/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm!: FormGroup;
  user!: User;
  UserSubmitted!: boolean;
  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService,
    private alertify: AlertifyService,
    ) { }

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.maxLength(10)]],
    }, { validators: this.passwordMatchingValidators })
  }

  passwordMatchingValidators: ValidatorFn = (control: AbstractControl): { [key: string]: any } | null => {
    const passwordControl = control.get('password');
    const confirmPasswordControl = control.get('confirmPassword');

    if (passwordControl && confirmPasswordControl) {
      return passwordControl.value === confirmPasswordControl.value ? null : { notmatched: true };
    }
    return null;
  }


  onSubmit() {
    console.log(this.registrationForm);
    this.UserSubmitted = true;

    if (this.registrationForm.valid) {
      // this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.UserSubmitted = false;
      this.alertify.success("Congratulation, You are successfully Registrated")
    }
    else{
      this.alertify.error("Kindly provide the required field")
    }
  }

  userData(): User {
    return this.user = {
      userName: this.userName.value,
      emai : this.email.value,
      password : this.password.value,
      mobile : this.mobile.value,
    }

  }


  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }
  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }




}
