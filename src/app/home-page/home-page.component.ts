import { Component, Input, OnInit } from '@angular/core';
import { IPeople } from '../people/people';
import { IPlanet } from '../planet/planet';
import { PeopleServiceService } from '../shared/people-service.service';
import { PlanetService } from '../shared/planet.service';
import { VehicleService } from '../shared/vehicle.service';
import { IVehicle } from '../vehicle/vehicle';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  peopleArr : IPeople[] = [];
  planetArr : IPlanet[] = [];
  vehicleArr : IVehicle[] = [];
  totalP! : number;
  totalPl! : number;
  totalV! : number;



  constructor(public peopleSer :PeopleServiceService, public planetSer : PlanetService, public vehicleSer : VehicleService)
  { this.totalP = 0; this.totalPl = 0; this.totalV = 0 }

  ngOnInit(): void {
    // Get people
    this.peopleSer.getPeople().subscribe(
      (data : any) =>{
      this.peopleArr = data;
      this.totalP = this.peopleArr.length;
      console.log("People" +this.totalP);

    });

    // get planet
    this.planetSer.getPlanet().subscribe(
      (data: any)=>{
      this.planetArr = data;
      this.totalPl = this.planetArr.length;
      console.log("Planet" +this.totalPl);

    });

    //get vehicle
    this.vehicleSer.getVehicles().subscribe(
      (data: any)=>{
      this.vehicleArr = data.results
      this.totalV = this.vehicleArr.length;
      console.log("Vehicle" +this.totalV);

    });



  }

}
