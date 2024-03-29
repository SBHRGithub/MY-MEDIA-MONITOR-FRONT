import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';
import { MovieSearchTMDBModel } from '../shared/models/movie-search-tmdb.model';
import { MovieDetailsTMDBModel } from '../shared/models/movie-details-tmdb.model';

@Injectable({
  providedIn: 'root'
})
export class MovieTMDBService {

  environmenT = environment;

  movieDetails$ = new BehaviorSubject<MovieDetailsTMDBModel | any>({});
  searchedMovies$: BehaviorSubject<any> = new BehaviorSubject([]);


  constructor(private http:HttpClient) { }

  searchMoviesFromApi(userSearch:string): void{
    let params = new HttpParams()
    .set('api_key', this.environmenT.API_KEY_TMDB)
    .set('language', 'fr')
    .set('query',userSearch);
   
    this.http.get(this.environmenT.API_TMDB_SEARCHMOVIES, {params})
    .pipe(
      map( (apiResponse:any) => {
        return apiResponse.results.map((movie:any) => new MovieSearchTMDBModel(movie))
      })
    )
    .subscribe((foundMovies:MovieSearchTMDBModel[]) => this.searchedMovies$.next(foundMovies));
  }

  getMovieDetailsFromApi(externalId:number): void{
    let params = new HttpParams()
    .set('api_key', this.environmenT.API_KEY_TMDB)
    .set('language', 'fr');

    this.http.get(this.environmenT.API_TMDB_GETMOVIESDETAILS + '/' + externalId, {params})
    .pipe(
      map( (apiResponse:any) => new MovieDetailsTMDBModel(apiResponse))
    ) 
    .subscribe( (movie:MovieDetailsTMDBModel) => this.movieDetails$.next(movie));
  }

  public getMovieDetails$():Observable<MovieDetailsTMDBModel> {
    return this.movieDetails$.asObservable();
  }

  public getSearchedMovies$():Observable<MovieSearchTMDBModel[]> {
    return this.searchedMovies$.asObservable();
  }

  public setSearchedMovies$(movies: MovieSearchTMDBModel[]): void {
    this.searchedMovies$.next(movies);
  }
}
