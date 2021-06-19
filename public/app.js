import { Invoice } from './classes/invoice.js';
let invOne = new Invoice("Aniket", 12, "WEB DEV");
let invTwo = new Invoice("Ashok", 30, "APP DEV");
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.details, inv.format());
});
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, amount.valueAsNumber);
});
