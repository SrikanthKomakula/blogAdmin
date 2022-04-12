import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/user.model';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  apiUrl= environment.apiUrl;

  constructor(private http: HttpClient, public apiService: ApiService) { }

  register(user: User){
    return this.apiService.post(this.apiUrl+'/register', user);
  }

  login(email: string, password: string){
    return this.apiService.post(this.apiUrl+'/login',{email, password});
  }
}
