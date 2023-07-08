// Initialize and add the map
function initMap() {
  // The location of Uluru
  const drjartOfficial = { lat: 37.495725690244, lng: 127.04053125588 };
  // The map, centered at drjartOfficial
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: drjartOfficial,
    mapId: '56b9e3ae479c9403'
  });
  // The marker, positioned at drjartOfficial
  const marker = new google.maps.Marker({
    position: drjartOfficial,
    map: map,
  });
}

window.initMap = initMap;