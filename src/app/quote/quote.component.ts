import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
       new Quote(1, 'Today is going to be a wonderful day', new Date(2019,3,22)),

     ]
     toogleDetails(index){
       this.quotes[index].showDescription = !this.quotes[index].showDescription
     }
     addNewQuote(quote){
            let quoteLength = this.quotes.length;
            quote.id=quoteLength+1;
            quote.timePassed = new Date(quote.timePassed);
            this.quotes.push(quote);

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
