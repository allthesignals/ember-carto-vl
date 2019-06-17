import Component from '@ember/component';
import cartoVl from '../utils/carto-vl';
import layout from '../templates/components/carto-interactivity';

const { instantiateInteractivity } = cartoVl;

export default class CartoInteractivityComponent extends Component {
  layout = layout;

  event = '';

  action = () => {};

  layer = null;

  init(...args) {
    super.init(...args);

    this._interactivity = instantiateInteractivity(this.layer);
  }

  _interactivity = null;
}
