import { module, test } from 'qunit';
import { setupTest } from 'tread-lightly/tests/helpers';

module('Unit | Model | card set', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('card-set', {});
    assert.ok(model);
  });
});
