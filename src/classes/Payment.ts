import { HasFormatter } from '../interfaces/HasFormatter';

export class Payment implements HasFormatter {
  constructor(
      readonly receipient : string,
      private amount : number,
      public details : string
  ){}

  format(){
      return `${this.receipient} is owed ${this.amount} for ${this.details}`;
  }
}