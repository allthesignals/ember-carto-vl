import { helper } from '@ember/component/helper';
import cartoVl from '../utils/carto-vl';

export function cartoSourceMvt(params) {
  return new cartoVl.source.MVT(...params);
}

export default helper(cartoSourceMvt);
