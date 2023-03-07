import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MovieTMDBService } from '../services/movie-tmdb.service';
import { MovieSearchTMDBModel } from '../shared/models/movie-search-tmdb.model';
import { MovieDetailsTMDBModel } from '../shared/models/movie-details-tmdb.model';
import { DataTransferService } from '../services/data-transfer.service';

@Component({
  selector: 'app-list-movie-multi-tmdb',
  templateUrl: './list-movie-multi-tmdb.component.html',
  styleUrls: ['./list-movie-multi-tmdb.component.css']
})
export class ListMovieMultiTmdbComponent {

  movie!:MovieDetailsTMDBModel;
  movieId:number = 0;
  moviesPath!: string;
  movies:Array<MovieSearchTMDBModel> = [];
  subscription:any;
  movieSearch!: MovieSearchTMDBModel;
  movieSearchId = 0;
  //searchedMovies: MovieSearchTMDBModel[];
  query!: string;


  constructor(
    private route:ActivatedRoute,
    private movieSvc:MovieTMDBService,
    public dataTransfer: DataTransferService)  {
    console.log(this);
  }

  ngOnInit() { 

    //console.log( this.route.snapshot.params) // {id: 123456}
    //this.movieId = this.route.snapshot.params['id'];
    
    this.query = this.dataTransfer.getData();
    //let essai = localStorage.getItem('userSearch');
    console.log(this.query);
    this.movieSvc.searchMoviesFromApi(this.query);

   /* this.subscription = this.movieSvc.movies$
    .subscribe( (moviesArr:MovieSearchTMDBModel[]) => {
      console.log("Hello");
      this.movies = moviesArr;
    });
    */

    this.subscription = this.movieSvc.searchedMovies$
    .subscribe( (moviesArr:MovieSearchTMDBModel[]) => {
      console.log("Hello");
      this.movies = moviesArr;
    });

    for (this.movieSearch of this.movies){
      this.movieSearchId = this.movieSearch.externalId;
      console.log(this.movieSearchId);
      this.movieSvc.getMovieDetailsFromApi(this.movieSearchId);
      this.movieSvc.getMovieDetails$()
      .subscribe(
        (movie: MovieDetailsTMDBModel) =>{
          console.log(movie);
          console.log("movie");
          this.movie = movie;
        }
      )
    }

    /*for (this.movieSearch of this.searchedMovies){
      this.movieSearchId = this.movieSearch.externalId;
      console.log(this.movieSearchId);
      this.movieSvc.getMovieDetailsFromApi(this.movieSearchId);
      this.movieSvc.getMovieDetails$()
      .subscribe(
        (movie: MovieDetailsTMDBModel) =>{
          console.log(movie);
          console.log("movie");
          this.movie = movie;
        }
      )
    }*/


  }
  
  getImgFullUrl(urlFragment:string):string {
    // https://image.tmdb.org/t/p/w500/faXT8V80JRhnArTAeYXz0Eutpv9.jpg
    return 'https://image.tmdb.org/t/p/w500'+ urlFragment;
  }
  
  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.subscription.unsubscribe();
    this.movieSvc.setSearchedMovies$([]);
  }
}
