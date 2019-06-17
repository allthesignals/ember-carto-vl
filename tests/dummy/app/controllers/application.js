import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  isVisible = true;

  @action
  testAction({ features: [feature] }) {
    if (feature) {
      feature.color.blendTo('opacity(LimeGreen, 0.5)', 100);
    }
  }
}
