import { Component, OnInit, Input } from '@angular/core';

import { DataService } from 'app/dataService/data.service';

@Component ({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  @Input() name: string;

  // someProperty: any;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    // console.log(this.dataService.cars);
    //
    // this.someProperty = this.dataService.myData();
  }

}
