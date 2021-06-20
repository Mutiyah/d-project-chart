import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';
import { PlanetComponent } from './planet/planet.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent },
  {path: 'home/:id', component: ProductDetailsComponent},
  {path : 'planet', component : PlanetComponent},
  {path : 'planet/:num', component : PlanetDetailsComponent},
  {path : 'vehicle', component : VehicleComponent},
  {path : 'vehicle/:id', component : VehicleDetailsComponent},
  {path: 'home', component: ChartComponent },

  {path: '', redirectTo: 'home', pathMatch : 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
