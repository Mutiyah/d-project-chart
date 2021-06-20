import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPlanet } from '../planet/planet';
import { PlanetService } from '../shared/planet.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {
  planetId: any;
  planet: IPlanet[] = [];

  constructor(public planetService : PlanetService,
              public route : ActivatedRoute,
              public routeLink : Router
    ) { }

  ngOnInit(): void {
      //  Get a particular planet info
  this.planetId = this.route.snapshot.paramMap.get('num');
  this.planetService.getPlanet().subscribe(
    (data: any)=>{
        this.planet = data[this.planetId]
        console.log(this.planet)
    }
  )
  }

  onBack(): void{
    this.routeLink.navigate(["/home"]);
  }

}
