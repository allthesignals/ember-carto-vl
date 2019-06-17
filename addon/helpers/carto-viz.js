import cartoVl from '../utils/carto-vl';
import { helper } from '@ember/component/helper';

const { instantiateViz } = cartoVl;

export function cartoViz([definition]) {
  return instantiateViz(definition);
}

export default helper(cartoViz);
