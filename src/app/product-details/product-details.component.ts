import { Component, OnInit } from '@angular/core';
import { IPeople} from '../people/people';
import {PeopleServiceService} from '../shared/people-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import { PlanetService } from '../shared/planet.service';
import { IPlanet } from '../planet/planet';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
people : IPeople[] = [];
planet: IPlanet[] = [];
personId : any;
planetId : any;


  constructor( public route : ActivatedRoute,
               public peopleService : PeopleServiceService,
               public routeLinks : Router,
               public planetService : PlanetService) {

  }

  ngOnInit(): void {
   this.personId = this.route.snapshot.paramMap.get('id');
  //  Get a particular person info
    this.peopleService.getPeople().subscribe((data : any)=>{
          this.people = data[this.personId];
            console.log(this.people);
        })

  }

  onBack(){
      this.routeLinks.navigate(['/home']);
  }

}
