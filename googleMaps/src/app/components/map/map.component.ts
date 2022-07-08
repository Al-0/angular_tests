import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Marker } from 'src/app/classes/marker.class';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  @ViewChildren(MapInfoWindow) infoWindows!: QueryList<MapInfoWindow>;
  markers: Marker[] = [];
  display: google.maps.LatLngLiteral = { lat: 0, lng: 0 };
  center: google.maps.LatLngLiteral = { lat: 25.5428, lng: -103.4068 };
  zoom = 15;

  constructor() {
    const localMarkers = localStorage.getItem('markers');
    if (localMarkers) {
      this.markers.push(...JSON.parse(localMarkers));
    }
  }

  ngOnInit(): void {}

  addMarker(event: google.maps.MapMouseEvent) {
    if (!event.latLng) return;
    const latLngObject = event.latLng.toJSON();
    const newMarker = new Marker(latLngObject.lat, latLngObject.lng);
    this.markers.push(newMarker);
    this.saveStorage();
  }

  openInfoWindow(marker: MapMarker) {
    const markerPosition = marker.getPosition()?.toJSON();
    if (!this.infoWindows.length) return;

    const markerInfoWindow = this.infoWindows.filter((marker) => {
      const infoWindowPosition = marker.getPosition()?.toJSON();
      if (!infoWindowPosition) return false;
      return (
        infoWindowPosition.lat === markerPosition?.lat &&
        infoWindowPosition.lng === markerPosition.lng
      );
    });
    if (markerInfoWindow.length === 0) return;

    markerInfoWindow[0].open(marker);
  }

  onDelete(idx: number){
    this.markers.splice(idx, 1);
    this.saveStorage();
  }

  saveStorage() {
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }
}
