ember-carto-vl
==============================================================================

Use [CartoVL](https://carto.com/developers/carto-vl/) in your Ember app:

```hbs
<MapboxGl
  id="map"
  @initOptions={{hash
    style="mapbox://styles/mapbox/basic-v9"
    zoom=17
    center=(array -73.938 40.6635)
  }}
  as |map|
>
  <CartoVectorLayer
    @map={{map.instance}}
    @visible={{this.isVisible}}
    @source={{carto-source-geojson
      (hash
        type='Feature'
        geometry=(hash
          type='Point'
          coordinates=(array -73.938 40.6635)
        )
        properties=(hash)
      )
    }}
    @viz={{carto-viz "
      width: 13
      color: #6A5ACD
      strokeWidth: 0.5
      strokeColor: #191970
    "}}
    as |layer|
  >
    <layer.interactivity.on
      @event="featureEnter"
      @action={{action this.featureEnter}}
    />

    <layer.interactivity.on
      @event="featureLeave"
      @action={{action this.featureLeave}}
    />
  </CartoVectorLayer>
</MapboxGl>
```

Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-carto-vl
```


Usage
------------------------------------------------------------------------------

[Longer description of how to use the addon in apps.]


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
