import carto from '../utils/carto-vl';
import { get } from '@ember/object';

export function initialize(appInstance) {
  const consumerEnvConfig = appInstance.resolveRegistration('config:environment');
  const cartoAuth = get(consumerEnvConfig, 'carto-vl.auth');

  if (cartoAuth) {
    carto.setDefaultAuth(cartoAuth);
  }
}

export default {
  initialize,
};
