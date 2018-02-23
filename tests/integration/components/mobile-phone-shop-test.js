import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mobile-phone-shop', 'Integration | Component | mobile phone shop', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mobile-phone-shop}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mobile-phone-shop}}
      template block text
    {{/mobile-phone-shop}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
