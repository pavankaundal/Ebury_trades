import { LightningElement, track } from 'lwc';

export default class ComboboxBasic extends LightningElement {
    valueSell = 'Select Sell Currency';
    valueBuy = 'Select Buy Currency';
    get options() {
        return [
            { label: '--Select Currency--', value: 'SelectCurrency' },
            { label: 'GBP', value: 'GBP' },
            { label: 'EUR', value: 'EUR' },
            { label: 'USD', value: 'USD' },
        ];
    }

    handleChangeSell(event) {
        this.value = event.detail.value;
    }

    
    handleChangeBuy(event) {
        this.connectedCallback();
    }

    //http://data.fixer.io/api/2021-06-01?access_key=59574b9f79b8149917c0f4861767e03c
   // @track responsedata;
   connectedCallback(){
    const calloutURL = 'http://data.fixer.io/api/latest?access_key=59574b9f79b8149917c0f4861767e03c';
    console.log('calloutURL ===> '+calloutURL);     
    fetch(calloutURL, {method:"GET"})
    .then((response) => {
    if (response.ok) {
        return response.json(); // returning the response in the form of JSON
     }
    })
    .then((jsonResponse) => {
    console.log('jsonResponse ===> '+JSON.stringify(jsonResponse));
    })
    .catch(error => {
    console.log('callout error ===> '+JSON.stringify(error));
    })

 }

}
