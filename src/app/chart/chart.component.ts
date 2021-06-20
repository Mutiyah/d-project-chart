import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { IPeople } from '../people/people';
import { IPlanet } from '../planet/planet';
import { PeopleServiceService } from '../shared/people-service.service';
import { PlanetService } from '../shared/planet.service';
import { VehicleService } from '../shared/vehicle.service';
import { IVehicle } from '../vehicle/vehicle';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
pieChart : any= [];
pie: IPeople[] = [];
pie1 : IPlanet[] = [];
pie2 : IVehicle[] = [];
@Input() totalPeoples! : number;
@Input() totalPlanets! : number;
@Input() totalVehicles! : number;


  constructor(
    public people: PeopleServiceService, public planet : PlanetService, public vehicle : VehicleService
    ) {
    }


  ngOnInit(){

   this.pieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
          labels: ['People', 'Planet', 'Vehicle'],
          datasets: [{
              label: '# of Items',
              data: [
                15, 10, 10
                // this.totalPeoples, this.totalPlanets, this.totalVehicles
              ],
              backgroundColor: [
                  '#172b0f',
                  '#b0bf85',
                  '#e7c554'
                  // 'rgba(75, 192, 192, 0.2)',
                  // 'rgba(153, 102, 255, 0.2)',
                  // 'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  '#e7c554'
                  // '#172b0f',
                  // '#fff'
                  // 'rgba(75, 192, 192, 1)',
                  // 'rgba(153, 102, 255, 1)',
                  // 'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }


}
