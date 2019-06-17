import { helper } from '@ember/component/helper';
import cartoVl from '../utils/carto-vl';

export function cartoSourceGeojson(params) {
  return new cartoVl.source.GeoJSON(...params);
}

export default helper(cartoSourceGeojson);
