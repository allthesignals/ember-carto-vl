ember-carto-vl
==============================================================================

Use [CartoVL](https://carto.com/developers/carto-vl/) in your Ember app:

```hbs
<MapboxGl
  id='map'
  @initOptions={{hash
    style='mapbox://styles/mapbox/basic-v9'
    zoom=13
    center=(array -73.938 40.6635)
  }}
  as |map|
>
  <CartoVectorLayer
    @map={{map.instance}}
    @source={{carto-source-sql 'select * from mappluto'}}
    @viz={{carto-viz '
      width: 5
      color: #6A5ACD
      strokeWidth: 0.5
      strokeColor: #191970
    '}}
    as |layer|
  >
    <layer.on
      @event='loaded'
      @action={{action 'testAction'}}
    />

    <layer.interactivity
      @event='featureHover'
      @action={{action 'testAction'}}
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
