import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goodbye',
  templateUrl: './goodbye.component.html',
  styleUrls: ['./goodbye.component.css']
})
export class GoodbyeComponent implements OnInit {

  helloName: string;

  constructor() { this.helloName = 'Goodye World'; }

  ngOnInit() {
  }

}
