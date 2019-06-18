import Component from '@ember/component';
import { guidFor } from '@ember/object/internals';
import { bind } from '@ember/runloop';
import { buildWaiter, waitForPromise } from 'ember-test-waiters';
import cartoVl from '../utils/carto-vl';
import layout from '../templates/components/carto-vector-layer';

const { instantiateLayer } = cartoVl;
const waiter = buildWaiter('load-waiter');

export default class CartoVectorLayer extends Component {
  layout = layout;

  map = {};

  source = {};

  viz = {};

  visible = true;

  didLoadLayer = () => {};

  _loadedLayer = null;

  get layerId() {
    return guidFor(this);
  }

  init(...args) {
    super.init(...args);

    this.willLoad = waiter.beginAsync();
    const layer = instantiateLayer(this.layerId, this.source, this.viz);

    layer.addTo(this.map, this.before);
    layer.on('loaded', bind(this, this._onLoad, layer));
  }

  async _updateLayer() {
    await waitForPromise(this._loadedLayer.update(this.source, this.viz));
  }

  _onLoad(layer) {
    if (this.isDestroyed || this.isDestroying) {
      layer.remove();

      return;
    }

    this.set('_loadedLayer', layer);
    this.didLoadLayer(layer);
    waiter.endAsync(this.willLoad);
  }

  didUpdateAttrs() {
    super.didUpdateAttrs();

    if (this._loadedLayer) {
      const methodName = this.visible ? 'show' : 'hide';
      this._loadedLayer[methodName]();

      this._updateLayer();
    }
  }

  willDestroyElement(...params) {
    super.willDestroyElement(...params);

    this._loadedLayer.remove();
  }
}
