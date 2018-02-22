import DS from 'ember-data';

export default DS.Model.extend({
	"prodTitle": DS.attr('string'),
	"desc": DS.attr('string'),
	"price": DS.attr('string'),
	"prodImage": DS.attr('string')
});
