import { module, test } from 'qunit';
import { setupTest } from 'spring-calc-front/tests/helpers';

module('Unit | Service | calculator-input', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:calculator-input');
    assert.ok(service);
  });
});
