export class Quote {
  public showDescription:boolean;
  //completeDate is timePassed
    constructor(public id:number, public name:string, public description:string, public timePassed:Date){
      this.showDescription=false;
    }
  }
