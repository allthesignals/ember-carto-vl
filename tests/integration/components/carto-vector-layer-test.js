import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, waitUntil } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import cartoVl from 'ember-carto-vl/utils/carto-vl';
import { hasPendingWaiters } from 'ember-test-waiters';
import Sinon from 'sinon';
import createMap from '../../helpers/create-map';

module('Integration | Component | carto-vector-layer', function(hooks) {
  setupRenderingTest(hooks);

  // setup basic dependencies for the component
  hooks.beforeEach(function() {
    this.source = new cartoVl.source.GeoJSON({
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]],
      },
      properties: {},
    });

    this.viz = cartoVl.instantiateViz('');

    this.map = createMap('map').map;
  });

  test('it instantiates', async function(assert) {
    const addLayerSpy = Sinon.spy(this.map, 'addLayer');

    await render(hbs`
      <CartoVectorLayer
        @map={{this.map}}
        @source={{this.source}}
        @viz={{this.viz}}
        as |layer|
      />
    `);

    assert.ok(addLayerSpy.called);
  });

  test('it registers events', async function(assert) {
    this.testAction = function() {};

    const addLayerSpy = Sinon.spy(this.map, 'addLayer');

    await render(hbs`
      <CartoVectorLayer
        @map={{this.map}}
        @source={{this.source}}
        @viz={{this.viz}}
        as |layer|
      >
        <layer.interactivity.on
          @event='featureHover'
          @action={{action this.testAction}}
        />
      </CartoVectorLayer>
    `);

    assert.ok(addLayerSpy.called);
  });

  test('it changes visibility', async function(assert) {
    let layerInstance = null;
    this.didLoad = (layer) => {
      layerInstance = layer;
    };

    this.visible = true;

    await render(hbs`
      <CartoVectorLayer
        @map={{this.map}}
        @source={{this.source}}
        @viz={{this.viz}}
        @visible={{this.visible}}
        @didLoadLayer={{action this.didLoad}}
        as |layer|
      />
    `);

    await waitUntil(() => !hasPendingWaiters());

    this.set('visible', false);

    assert.equal(layerInstance.visible, false);
  });

  test('it updates viz', async function(assert) {
    assert.expect(1);
    let layerInstance = null;

    this.didLoad = (layer) => {
      layerInstance = layer;
    };

    await render(hbs`
      <CartoVectorLayer
        @map={{this.map}}
        @source={{this.source}}
        @viz={{this.viz}}
        @didLoadLayer={{action this.didLoad}}
        as |layer|
      />
    `);

    await waitUntil(() => !hasPendingWaiters());

    this.set('viz', cartoVl.instantiateViz('width: 5'));

    await waitUntil(() => !hasPendingWaiters());

    assert.equal(layerInstance.viz.width.toString(), 5);
  });
});
