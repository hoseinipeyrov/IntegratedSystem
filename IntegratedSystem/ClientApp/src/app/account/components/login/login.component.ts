import { MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../../_shared/_services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  returnUrl: string;
  isDisabled: boolean = false;
  hidePassword: boolean = false;

  constructor(
    public snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private authenticateSrvice: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      userName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });

    this.authenticateSrvice.logout();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get form() { return this.formGroup.controls; }
  get username() { return this.formGroup.controls.userName; }
  get password() { return this.formGroup.controls.password; }

  onSubmit() {

    if (this.formGroup.invalid) { return; }

    this.isDisabled = true;
    this.authenticateSrvice.login(this.form.userName.value, this.form.password.value)
      .pipe(first())
      .subscribe(
        result => {
          this.router.navigate([this.returnUrl]);
          this.isDisabled = false;
        },
        error => {
          this.isDisabled = false;
          this.snackBar.open(error.error.message, null, { duration: 3000, direction: 'rtl'});
          //alert(error.error.message);
        }
      );
  }
}
