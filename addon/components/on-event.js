import MapboxGlOn from 'ember-mapbox-gl/components/mapbox-gl-on';
import { computed } from '@ember/object';

// TODO: merge https://github.com/kturney/ember-mapbox-gl/pull/78
// overrides private method _event to avoid lowercase
export default class MapboxGlOnComponent extends MapboxGlOn {
  @computed('event')
  get _event() {
    return this.event;
  }
}
