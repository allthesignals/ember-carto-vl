import mapboxgl from 'mapbox-gl';

const mapSize = 600;

export default function createMap (name, size) {
  size = size || mapSize;

  const div = document.createElement('div');

  div.id = name;
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  div.style.position = 'absolute';
  document.body.style.margin = '0';
  document.body.style.padding = '0';
  document.body.appendChild(div);

  const map = new mapboxgl.Map({
    container: name,
    style: { version: 8, sources: {}, layers: [] },
    center: [0, 0],
    zoom: 0
  });

  return { div, map };
}
