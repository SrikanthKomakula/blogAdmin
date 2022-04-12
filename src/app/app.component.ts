import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';
import { SpinnerService } from './shared/spinner/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'blogAdmin';
  isLoggedIn = false;
  isloginFailed = false;
  userName: string;

  constructor(public spinnerService: SpinnerService,
              private tokenStorageService: TokenStorageService){}

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if(this.isLoggedIn){
      const user =   this.tokenStorageService.getUser();
      this.userName = user;
    }
  }
}
