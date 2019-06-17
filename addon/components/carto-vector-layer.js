import Component from '@ember/component';
import cartoVl from '../utils/carto-vl';
import { guidFor } from '@ember/object/internals';
import layout from '../templates/components/carto-vector-layer';
import { buildWaiter, waitForPromise } from 'ember-test-waiters';

const { instantiateLayer } = cartoVl;
const waiter = buildWaiter('load-waiter');

export default class CartoVectorLayer extends Component {
  layout = layout;

  map = {};

  source = {};

  viz = {};

  visible = true;

  didLoadLayer = () => {};

  _cartoLayer = null;

  get layerId() {
    return guidFor(this);
  }

  init(...args) {
    super.init(...args);

    const willInstantiate = waiter.beginAsync();
    const layer = instantiateLayer(this.layerId, this.source, this.viz);

    layer.addTo(this.map, this.before);
    layer.on('loaded', () => {
      this.set('_cartoLayer', layer);
      this.didLoadLayer(layer);

      waiter.endAsync(willInstantiate);
    });
  }

  async _updateLayer() {
    await waitForPromise(this._cartoLayer.update(this.source, this.viz));
  }

  didUpdateAttrs() {
    super.didUpdateAttrs();

    if (this._cartoLayer) {
      const methodName = this.visible ? 'show' : 'hide';
      this._cartoLayer[methodName]();

      this._updateLayer();
    }
  }

  willDestroyElement(...params) {
    super.willDestroyElement(...params);

    this._cartoLayer.remove();
  }
}
