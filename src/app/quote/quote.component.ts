import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
     new Quote(1, 'Today is going to be a wonderful day', 'This is because I am going to make a good project', new Date(2019,3,22)),
     new Quote(2, 'I am going to be a great developer', 'And get employed in a good company', new Date(2019,3,22)),
     new Quote(3, 'I am El Jefe!!', 'The Boss!', new Date(2019,3,22)),
     new Quote(4, 'Selector take your time, take your time','You are going too fast!!', new Date(2019,3,22)),
     new Quote(5, 'Moringa School', 'The place to be for all aspiring developers', new Date(2019,3,22)),
     new Quote(6, 'I know you want my free time','Frech Montana, TY $ Sign, Tinashe', new Date(2019,3,22)),
   ]
   toogleDetails(index){
     this.quotes[index].showDescription = !this.quotes[index].showDescription
   }
   addNewQuote(quote){
          let quoteLength = this.quotes.length;
          quote.id=quoteLength+1;
          quote.timePassed = new Date(quote.timePassed)
          this.quotes.push(quote)

      }

   deleteQuote(isComplete, index){
     if (isComplete){
       let toDelete=confirm(`Are you sure you want to delete the quote:  ${this.quotes[index].name} ?`)

       if(toDelete){
       this.quotes.splice(index, 1);
     }
   }
 }
  constructor() { }

  ngOnInit() {
  }

}
