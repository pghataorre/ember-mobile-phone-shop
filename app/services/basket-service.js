import Ember from 'ember';
import Service from '@ember/service';

export default Ember.Service.extend({
    init() {
        this._super(...arguments);
    }, 

    addToBasket(prodItem){

        
    
    }, 
    addItemQty(prodItem){

        prodItem.prodQty = 1;

    }
});
