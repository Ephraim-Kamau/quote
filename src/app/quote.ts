export class Quote {
  public upvotes:number
  public downvotes:number
  public myDate:Date
  //completeDate is timePassed
    constructor(public id:number, public name:string, public description:string, public timePassed:Date){

  
      this.upvotes=0
      this.downvotes=0
      this.myDate= new Date()
    }
  }
