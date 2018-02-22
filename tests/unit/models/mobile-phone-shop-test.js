import { moduleForModel, test } from 'ember-qunit';

moduleForModel('mobile-phone-shop', 'Unit | Model | mobile phone shop', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
