import { HasFormatter } from '../interfaces/HasFormatter';

export class Invoice implements HasFormatter {
  constructor(
      readonly client : string,
      private amount : number,
      public details : string
  ){}

  format(){
      return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}