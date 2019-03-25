export class Quote {
  public upvotes:number
  public downvotes:number
  public myDate:Date
  public author:string
  //completeDate is timePassed
    constructor(public id:string, public name:string, public description:string){

      this.author=''
      this.upvotes=0
      this.downvotes=0
      this.myDate= new Date()
    }
  }
