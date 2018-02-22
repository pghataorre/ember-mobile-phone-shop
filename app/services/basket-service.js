import Ember from 'ember';
import Service from '@ember/service';

export default Ember.Service.extend({
    init() {
        this._super(...arguments);
    }, 
    basket: null,
    addToBasket(prodItem){

  

            //let test = prodItem;
            alert('this is a test')

       // this.basket = this.get('product');
       // this.store.createRecord('basket', prodItem);


        //this.set('basket', prodItem);
    
    }, 
    addItemQty(prodItem){

        prodItem.prodQty = 1;

    }
});
