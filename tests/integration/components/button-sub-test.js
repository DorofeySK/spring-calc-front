import { module, test } from 'qunit';
import { setupRenderingTest } from 'spring-calc-front/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | button-sub', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ButtonSub />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ButtonSub>
        template block text
      </ButtonSub>
    `);

    assert.dom().hasText('template block text');
  });
});
