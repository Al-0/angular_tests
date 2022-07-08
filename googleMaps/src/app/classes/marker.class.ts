export class Marker {
  public lat: number;
  public lng: number;

  public title: string = 'Blank title';
  public description: string = 'Blank description';

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
}
