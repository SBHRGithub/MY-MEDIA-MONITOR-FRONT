import { Component} from '@angular/core';
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
  movies:Array<MovieSearchTMDBModel> = [];
  subscription:any;
  movieSearch!: MovieSearchTMDBModel;
  movieSearchId = 0;
  query!: string;


  constructor(

    private movieSvc:MovieTMDBService,
    public dataTransfer: DataTransferService)  {
    console.log(this);
  }

  ngOnInit() { 

    this.query = this.dataTransfer.getData();
    
   
    this.movieSvc.searchMoviesFromApi(this.query);

    this.subscription = this.movieSvc.searchedMovies$
    .subscribe( (moviesArr:MovieSearchTMDBModel[]) => {
      this.movies = moviesArr;
    });

    for (this.movieSearch of this.movies){
      this.movieSearchId = this.movieSearch.externalId;
      this.movieSvc.getMovieDetailsFromApi(this.movieSearchId);
      this.movieSvc.getMovieDetails$()
      .subscribe(
        (movie: MovieDetailsTMDBModel) =>{
          this.movie = movie;
          this.movie.genre = " "
        }
      )
    }
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
