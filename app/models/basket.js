import DS from 'ember-data';

const { 
	attr
 } = DS;

export default DS.Model.extend({
	prodTitle: attr('string'),
	desc: attr('string'),
	price: attr('string'),
	prodImage: attr('string')
});
