import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';
import { DataTransferService } from './data-transfer.service';
import { MovieFindVideoappModel } from '../shared/models/movie-find-videoapp.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MovieVideoappFindService {

  environmenT = environment;
  userData: any;
  movie!: MovieFindVideoappModel;
  movieFind!: MovieFindVideoappModel;
  movieFindId =0;
  moviesFind:MovieFindVideoappModel[]= [];
  movies: Array<MovieFindVideoappModel> = [];
  searchedMovies$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(
    private http:HttpClient,
    public alertSvc: AlertService,
    public dataSvc: DataTransferService,
    public router:Router) { }

  find(followForm: FormGroup): void{

    let userDataInStorage = localStorage.getItem('userData');
    this.userData = userDataInStorage!=null?JSON.parse(userDataInStorage):{};
    
    let params = new HttpParams()
    .set('email', this.userData.email)
    .set('title', followForm.value.title)
    .set('mediaType', 'movie')
    .set('viewingStatus', followForm.value.viewingStatus)
    .set('myScore', followForm.value.myScore);

    this.http.get(this.environmenT.API_VIDEOAPP_MOVIEFIND, {params})
    .pipe(
      map((apiResponse:any) => {
        return apiResponse.results.map((movie:any) => new MovieFindVideoappModel(movie))
      })
    )
    .subscribe((foundMovies:MovieFindVideoappModel[]) => {
      this.searchedMovies$.next(foundMovies);
      console.log(this.searchedMovies$);
    });
  }
  
  public getSearchedMovies$():Observable<MovieFindVideoappModel[]> {
    return this.searchedMovies$.asObservable();
  }
}
