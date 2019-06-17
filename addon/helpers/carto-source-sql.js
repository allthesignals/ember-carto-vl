import { helper } from '@ember/component/helper';
import cartoVl from '../utils/carto-vl';

export function cartoSourceSql(params) {
  return new cartoVl.source.SQL(...params);
}

export default helper(cartoSourceSql);
