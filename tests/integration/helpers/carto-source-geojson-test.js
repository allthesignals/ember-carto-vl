import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | carto-source-geojson', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('inputValue', {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]],
      },
      properties: {},
    });

    await render(hbs`{{carto-source-geojson inputValue}}`);

    assert.ok(this.element);
  });
});
