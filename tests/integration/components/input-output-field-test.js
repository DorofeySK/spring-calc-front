import { module, test } from 'qunit';
import { setupRenderingTest } from 'spring-calc-front/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | input-output-field', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<InputOutputField />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <InputOutputField>
        template block text
      </InputOutputField>
    `);

    assert.dom().hasText('template block text');
  });
});
