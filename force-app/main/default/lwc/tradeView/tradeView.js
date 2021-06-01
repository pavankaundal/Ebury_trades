import { LightningElement, api, wire, track } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation';

// Import Bear object fields
import TRADES_FIELD from '@salesforce/schema/Trade__c';
const tradeFields = [TRADES_FIELD];
export default class Trades extends NavigationMixin(LightningElement) {
	@api recordId; 
	@wire(getRecord, { recordId: '$recordId', fields: tradeFields })
  trade;
	get tradeId() {
		return getFieldValue(this.trade.data, TRADES_FIELD);
	}

    navigateToNewTrade() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Trade__c',
                actionName: 'new'
            }
        });
    }
    @track showTradeComponent = false;
    showNewTrade() {
        this.showTradeComponent = true;
      }
}
