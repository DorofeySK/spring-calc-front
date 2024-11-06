import { module, test } from 'qunit';
import { setupRenderingTest } from 'spring-calc-front/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | button-mult', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ButtonMult />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ButtonMult>
        template block text
      </ButtonMult>
    `);

    assert.dom().hasText('template block text');
  });
});
