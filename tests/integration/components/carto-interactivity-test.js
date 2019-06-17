import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import carto from '@carto/carto-vl';

module('Integration | Component | carto-interactivity', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    const source = new carto.source.GeoJSON({
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]],
      },
      properties: {},
    });
    const viz = new carto.Viz('');

    this.layer = new carto.Layer('test-layer', source, viz);

    // Template block usage:
    await render(hbs`
      <CartoInteractivity
        @layer={{this.layer}}
        @event='featureHover'
      />
    `);

    assert.equal(this.element.textContent.trim(), '');
  });
});
