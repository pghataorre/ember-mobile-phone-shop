import Component from '@ember/component';
import  service from '@ember/service';
import Ember from 'ember';

export default Component.extend({
    store: Ember.inject.service(),
    products: Ember.computed(function () {

        return this.get('store').findAll('product');

    }),
    actions: {

        addToCart(prodId){

            this._super('...argument');

            debugger;
            let product = this.get('store').findRecord('product', prodId, {backgroundReload: false});
            
            this.get('basket').pushObject(product);
            
        }

    }
});
