import { Invoice } from './classes/Invoice';
import { Payment } from './classes/Payment';
import { HasFormatter } from './interfaces/HasFormatter';
import { ListTemplate } from './classes/ListTemplate';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const details = document.querySelector('#details') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const container = document.querySelector('.item-list') as HTMLUListElement;
const newListEl = new ListTemplate(container);

form.addEventListener('submit', (e : Event) => {
  e.preventDefault();
  let doc : HasFormatter;
  if(type.value === 'Invoice'){
    doc = new Invoice(tofrom.value, amount.valueAsNumber, details.value);
  } else {
    doc = new Payment(tofrom.value, amount.valueAsNumber, details.value);
  }
  newListEl.render(doc, type.value, 'end');
});

const addUID = <T>(obj : T) => {
  let uid = Math.random() * 100;
  return {...obj, uid};
}

let doc1 = addUID({name:'Aniket', age:'22'});
console.log(doc1.name);

interface Resource<T> {
  uid: number,
  resourceName: string,
  data: T
}

let rrn : Resource<object> = {
  uid:1,
  resourceName:'personName',
  data:{name:'Aniket'}
}
console.log(rrn);
