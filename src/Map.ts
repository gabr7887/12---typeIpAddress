import L from "leaflet";
export default class Map{
  map: L.Map
  constructor() {
    this.map = L.map('map');
  }
  /** função que inicia o Map*/
  initMap():void {
    this.map.setView([51.505, -0.09], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }

  setLocation(lat:number, lng: number) {
    this.map.setView([lat, lng], 13);
    L.marker([lat, lng]).addTo(this.map);
  }
}