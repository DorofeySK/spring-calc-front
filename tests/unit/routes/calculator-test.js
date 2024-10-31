import { module, test } from 'qunit';
import { setupTest } from 'spring-calc-front/tests/helpers';

module('Unit | Route | calculator', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:calculator');
    assert.ok(route);
  });
});
