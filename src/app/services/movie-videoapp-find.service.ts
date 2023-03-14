import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';
import { MovieTMDBService } from './movie-tmdb.service';
import { DataTransferService } from './data-transfer.service';
import { MovieDetailsTMDBModel } from '../shared/models/movie-details-tmdb.model';
import { MovieFindVideoappModel } from '../shared/models/movie-find-videoapp.model';
import { MovieDisplayVideoappModel } from '../shared/models/movie-display-videoapp.model';
import { MovieListVideoappModel } from '../shared/models/movie-list-videoapp.model';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class MovieVideoappFindService {

  environmenT = environment;
  userData: any;
  moviesFind:MovieFindVideoappModel[]= [];
  moviesDisplay: MovieDisplayVideoappModel[]= [];
  movies:MovieListVideoappModel[]= [];

  constructor(
    private http:HttpClient,
    public alertSvc: AlertService,
    public dataSvc: DataTransferService,
    public movieSvc: MovieTMDBService,
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
    .subscribe(
      {
        next: (response:any) => {           
          this.moviesFind = response;
          if (this.moviesFind.length == 0){
            this.alertSvc.showAlert("Your movie request has no answer");
          }
          else{
            this.moviesDisplay = this.moviesFind
            .map((movie:MovieFindVideoappModel) => new MovieDisplayVideoappModel(movie)
            );

            for (let element of this.moviesDisplay){
              this.movieSvc.getMovieDetailsFromApi(element.externalId);
              this.movieSvc.getMovieDetails$()
              .subscribe(
                (movie: MovieDetailsTMDBModel) => {
                  console.log(movie);
                  element.releaseDate = movie.releaseDate;
                  element.overview = movie.overview;
                  element.posterPath = movie.posterPath;
                  element.voteAverage = movie.voteAverage;
                }
              );    
            }

            this.movies = this.moviesDisplay
            .map((movie: MovieDisplayVideoappModel) => new MovieListVideoappModel(movie));

            this.dataSvc.setMoviesList(this.movies);

            this.router.navigate(['/list-movie-multi-videoapp']);
          }
        }
      }        
    );   
  }
}
