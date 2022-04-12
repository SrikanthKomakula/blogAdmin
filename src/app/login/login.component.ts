import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  isLoggedIn = false;
  isloginFailed = false;
  errMessage :string;
  loading = false;

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private authenticationService: AuthenticationService,
              private tokenStorageService: TokenStorageService,
              private router: Router) { }

  ngOnInit(): void {
    //get token if already login
    if(this.tokenStorageService.getToken()){
      this.isLoggedIn = true;
      this.router.navigate(['admin/dashboard'])

    }

  }
  submitLoginForm(){
    this.submitted = true;
    if(this.loginForm.invalid){
      this.errMessage = "Form is Not Valid";
      this.submitted = false;
      return;
    }

   // console.log(this.loginForm.value);
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    console.log(email, password);

    this.authenticationService.login(email, password).subscribe(
      data => {

        this.submitted = false;
        this.tokenStorageService.saveToken(data.token);
        this.tokenStorageService.saveUser(data.user);
        this.isloginFailed = false;
        this.isLoggedIn = true;
       // this.reloadPage();
       console.log(data.token);
       console.log(data.user);
       console.log(data);
       this.router.navigate(['/admin/dashboard']);



      },
      err => {
        this.errMessage = err.error;
        console.log(err.error);
      }
    );

  }

  reloadPage(){
    window.location.reload();
  }

}
