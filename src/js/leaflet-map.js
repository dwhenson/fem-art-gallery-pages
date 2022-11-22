import iconUrl from "../images/icon-location.svg";

const map = L.map("map", {
  scrollWheelZoom: false,
  zoomControl: false,
}).setView([41.483_408, -71.309_86], 15);

L.control
  .zoom({
    position: "bottomright",
  })
  .addTo(map);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var flag = L.icon({
  iconUrl,
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [41.483_408, -71.309_86], // point from which the popup should open relative to the iconAnchor
});

L.marker([41.482_108, -71.310_36], { icon: flag, alt: "Museum location" }).addTo(map);
