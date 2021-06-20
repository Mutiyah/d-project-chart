import { Component, Injectable, OnInit } from '@angular/core';
import { IPlanet } from '../planet/planet';
import {PlanetService} from '../shared/planet.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
planetData : IPlanet[] = [];
totalPlanets! : number;

  constructor(private planetService : PlanetService) { }

  ngOnInit(): void {
      this.planetService.getPlanet().subscribe(
        (planetApiData: any) => {
          this.planetData = planetApiData;
          // this.planetData = planetApiData
          this.totalPlanets = this.planetData.length;
          console.log(this.totalPlanets);
        }
      )
  }

}
