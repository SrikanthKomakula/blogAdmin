import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
// import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }
  // private count = 0;
  // private spinner = new BehaviorSubject<string>('');

  // getSpinner():Observable<string>{
  //   return this.spinner.asObservable();
  // }

  // startSpinner(){
  //   if(++this.count === 1){
  //     this.spinner.next('start');
  //   }
  // }

  // stopSpinner(){
  //   if(this.count === 0 || --this.count === 0){
  //     this.spinner.next('stop');
  //   }
  // }

  // resetSpinner(){
  //   this.count = 0;
  //   this.spinner.next('stop');
  // }

}
