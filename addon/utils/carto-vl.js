import carto from '@carto/carto-vl';

export default {
  instantiateLayer(...args) {
    return new carto.Layer(...args);
  },

  instantiateInteractivity(...args) {
    return new carto.Interactivity(...args);
  },

  instantiateViz(...args) {
    return new carto.Viz(...args);
  },

  source: carto.source,
  expressions: carto.expressions,
  basemaps: carto.basemaps,

  setDefaultAuth(...args) {
    carto.setDefaultAuth(...args);
  },
  setDefaultConfig(...args) {
    carto.setDefaultConfig(...args);
  },
  on(...args) {
    carto.on(...args);
  },
  off(...args) {
    carto.off(...args);
  },
};
