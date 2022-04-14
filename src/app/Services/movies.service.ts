import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //add for http
import { Observable  } from 'rxjs'; //add observable

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient:HttpClient) { } // add http as arguement

  GetMovieData():Observable<any> {
    return this.httpClient.get('http://www.omdbapi.com/?apikey=6462cf83&s=%27war%27');
  }
}
                                                                                       