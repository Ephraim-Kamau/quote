import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

quotes = [
      new Quote(1, 'Today is going to be a wonderful day'),
      new Quote(2, 'I am going to be a great developer'),
      new Quote(3, 'I am El Jefe!!'),
      new Quote(4, 'Selector take your time, take your time'),
      new Quote(5, 'Moringa School'),
    new Quote(6, 'I know you want my free time'),
]
  constructor() { }

  ngOnInit() {
  }

}
