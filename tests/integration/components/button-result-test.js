import { module, test } from 'qunit';
import { setupRenderingTest } from 'spring-calc-front/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | button-result', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ButtonResult />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ButtonResult>
        template block text
      </ButtonResult>
    `);

    assert.dom().hasText('template block text');
  });
});
