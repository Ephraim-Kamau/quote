import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
     new Quote(1, 'Today is going to be a wonderful day', 'This is because I am going to make a good project'),
     new Quote(2, 'I am going to be a great developer', 'And get employed in a good company'),
     new Quote(3, 'I am El Jefe!!', 'The Boss!'),
     new Quote(4, 'Selector take your time, take your time','You are going too fast!!'),
     new Quote(5, 'Moringa School', 'The place to be for all aspiring developers'),
     new Quote(6, 'I know you want my free time','Frech Montana, TY $ Sign, Tinashe'),
   ]
   toogleDetails(index){
     this.quotes[index].showDescription = !this.quotes[index].showDescription
   }
   completeQuote(isComplete, index){
     if (isComplete){
       this.quotes.splice(index, 1);
     }
   }
  constructor() { }

  ngOnInit() {
  }

}
