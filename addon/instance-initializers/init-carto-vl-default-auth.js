import carto from '../utils/carto-vl';
import { get } from '@ember/object';

export function initialize(appInstance) {
  const consumerEnvConfig = appInstance.resolveRegistration('config:environment') || {
    auth: {
      username: '',
      apiKey: '',
    },
  };
  const cartoAuth = get(consumerEnvConfig, 'carto-vl.auth');

  carto.setDefaultAuth(cartoAuth);
}

export default {
  initialize,
};
