import { Component, Injectable, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import {IPeople} from '../people/people';
import {PeopleServiceService} from '../shared/people-service.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  peopleData: IPeople[] = [];
  totalPeople!: number;

  constructor(private peopleService : PeopleServiceService ) {}

  ngOnInit(): void {
      this.peopleService.getPeople().subscribe(
        (data : any) => {
              this.peopleData = data
              this.totalPeople = this.peopleData.length;
               console.log(this.totalPeople)
        }

      )
  }


}
