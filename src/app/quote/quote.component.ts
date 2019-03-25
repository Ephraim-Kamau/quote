import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = []


     toogleDetails(index){
        this.quotes[index].showDescription = !this.quotes[index].showDescription
        }

     addNewQuote(quote){
            let quoteLength = this.quotes.length;
            quote.id=quoteLength+1;
            quote.timePassed = new Date(quote.timePassed);
            quote.Upvote='';
            quote.Downvote='';
            this.quotes.push(quote);

        }
        preNum:number
        lastNum:number
        counter:number

        upvote(i){
             this.quotes[i].upvotes+=1
         }
         downvote(i){
           this.quotes[i].downvotes+=1
         }
         highestUpvote(){
        this.preNum = 0
        this.lastNum = 0

        for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
          this.lastNum = this.quotes[this.counter].upvotes;
          if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
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
