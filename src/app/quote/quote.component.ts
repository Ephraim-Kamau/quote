import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes=[new Quote("Kamau", "Ephraim Kamau", "Leo ni leo msema kesho ni mwongo" )]




     addNewQuote(quote){
            let quoteLength = this.quotes.length;
            quote.id=quoteLength+1;
            quote.timePassed = new Date(quote.timePassed);
            quote.Upvote='';
            quote.Downvote='';
            this.quotes.push(quote);

        }


        upvote(i){
             this.quotes[i].upvotes+=1
         }
         downvote(i){
           this.quotes[i].downvotes+=1
         }

     deleteQuote(isComplete, index){
       if (isComplete){
          let toDelete=this.quotes.splice(index, 1);

     }
   }
    constructor() { }

    ngOnInit() {
    }

  }
