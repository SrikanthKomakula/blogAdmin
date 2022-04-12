import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from '../shared/spinner/spinner.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenStorageService, public spinnerService: SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.isLoading.next(true);
    const token = this.tokenService.getToken();
    if(token != null){
    request = request.clone({headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer '+ token)});
    }
    return next.handle(request).pipe(
      finalize(
        () => {
         this.spinnerService.isLoading.next(false);
        }
      )
    );
  }
}
export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
