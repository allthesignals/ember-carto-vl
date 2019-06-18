import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  isVisible = true;

  @action
  featureEnter({ features }) {
    features.forEach(feature => {
      feature.color.blendTo('opacity(LimeGreen, 0.5)', 100);
    });
  }

  @action
  featureLeave({ features }) {
    features.forEach(feature => {
      feature.color.reset(100);
    });
  }
}
