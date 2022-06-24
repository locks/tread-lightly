import { module, test } from 'qunit';
import { setupTest } from 'tread-lightly/tests/helpers';

module('Unit | Controller | sets', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:sets');
    assert.ok(controller);
  });
});
