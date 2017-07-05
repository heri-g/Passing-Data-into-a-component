import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  cars = [
    'Ford', ' Honda', ' Nissan '
  ];

  constructor() { }


  myData() {
    return this.cars;
  }

}
