import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;
  loading = false;

  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    cnfPassword: new FormControl('', Validators.required)

  });

  constructor(private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private router: Router,
              private alertService: AlertService) { }

  ngOnInit() {
  }



  submitRegisterForm(){

    this.submitted = true;

    this.alertService.clear();


    console.log(this.registerForm.value);
    //stop here if form is invalid
    if(this.registerForm.invalid){
      return;
    }
    this.loading = true;

    this.authenticationService.register(this.registerForm.value)
      .pipe(first())
      .subscribe({
        next: data => {
          this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          this.router.navigate(['../login'], { relativeTo: this.route });
          console.log(data+'success');

        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
          console.log(error+'error');

        }
      });

  }

}
