import { Injectable } from '@angular/core';
import { IPeople } from '../people/people';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeopleServiceService {
  peopleApi : string = 'https://jsonplaceholder.typicode.com/photos/?_limit=15';
  peopleResult! : any;

  constructor(private http : HttpClient) { }

  getPeople(): Observable<IPeople[]> {
    return this.http.get<IPeople[]>(`${this.peopleApi}`);
  }

  // getPeopleDetails(){
  //   return this.http.get(`${this.peopleApi}`).subscribe(data=>{
  //       this.peopleResult = data;

  //   })
  // }
}
