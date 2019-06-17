import { helper } from '@ember/component/helper';
import cartoVl from '../utils/carto-vl';

export function cartoSourceDataset(params) {
  return new cartoVl.source.Dataset(...params);
}

export default helper(cartoSourceDataset);
