import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import WelcomePage from 'ember-boilerplate/tests/pages/components/pages/welcome';

module('Integration | Component | pages/welcome', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<Pages::Welcome />`);

    assert.equal(WelcomePage.title, 'Welcome');
  });
});
