import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';
import { MovieFindVideoappModel } from '../shared/models/movie-find-videoapp.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MovieVideoappFindService {

  environmenT = environment;
  searchedMovies:MovieFindVideoappModel[]= [];

  private _searchedMovies$: BehaviorSubject<any> = new BehaviorSubject([]);
  userData: any;
  HttpGetResponse!: Observable<any>;

  constructor(
    private http:HttpClient,
    public alertSvc: AlertService,
    public router:Router) { }

  get searchedMovies$():Observable<MovieFindVideoappModel[]> {
    return this._searchedMovies$.asObservable();
  }
  find(followForm: FormGroup): Observable<any> {
    let userDataInStorage = localStorage.getItem('userData');
    this.userData = userDataInStorage!=null?JSON.parse(userDataInStorage):{};
    
    let params = new HttpParams()
    .set('email', this.userData.email)
    .set('title', followForm.value.title)
    .set('mediaType', 'movie')
    .set('viewingStatus', followForm.value.viewingStatus)
    .set('myScore', followForm.value.myScore);

    console.log("get to API_VIDEOAPP_MOVIEFIND to come")

    return this.http.get(this.environmenT.API_VIDEOAPP_MOVIEFIND, {params})
    .pipe(
      map((apiResponse:any) => {
        console.log("API_VIDEOAPP_MOVIEFIND response");
        console.log(apiResponse);
        console.log(apiResponse.results);
        return apiResponse.results.map((movieFind:any) => new MovieFindVideoappModel(movieFind))
      })
    );      
  }
}
