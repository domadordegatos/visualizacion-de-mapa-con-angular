import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  mapa:Mapboxgl.Map;

  ngOnInit(){
    (Mapboxgl as any).accessToken = environment.mapboxkey;
    this.mapa = new Mapboxgl.Map({
    container: 'mapa-mapbox', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-72.3685609,5.3386723], // lg-lt
    zoom: 14 // starting zoom
    });
    this.crearMarcador(-72.3685609,5.3386723);
  }

  crearMarcador(lng:number,lat:number){
    const marker = new Mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([lng, lat])
      .addTo(this.mapa);

      marker.on('drag',()=>{
        console.log(marker.getLngLat());
      })
  }
}
