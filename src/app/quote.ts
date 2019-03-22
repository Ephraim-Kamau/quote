export class Quote {
  public showDescription:booelan;
  constructor(public id:number, public name:string, public description:string){
    this.showDescription=false;
  }
}
