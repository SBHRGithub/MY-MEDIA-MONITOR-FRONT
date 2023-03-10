import { Component } from '@angular/core';
import { MovieTMDBService } from '../services/movie-tmdb.service';
import { DataTransferService } from '../services/data-transfer.service';
import { MovieDetailsTMDBModel } from '../shared/models/movie-details-tmdb.model';
import { MovieFindVideoappModel } from '../shared/models/movie-find-videoapp.model';
import { MovieDisplayVideoappModel } from '../shared/models/movie-display-videoapp.model';


@Component({
  selector: 'app-list-movie-multi-videoapp',
  templateUrl: './list-movie-multi-videoapp.component.html',
  styleUrls: ['./list-movie-multi-videoapp.component.css']
})
export class ListMovieMultiVideoappComponent {
  
  movieSearch!: MovieDisplayVideoappModel;
  movieSearchId = 0;
  moviesFindVideoappModel!: MovieFindVideoappModel[];
  movieDetailsTMDBModel!:MovieDetailsTMDBModel;
  moviesDetailsTMDBModel!:MovieDetailsTMDBModel[];
  moviesDisplayVideoappModel!: MovieDisplayVideoappModel [];
  movie!: MovieDisplayVideoappModel;
  movies!: MovieDisplayVideoappModel[];

  constructor(

    private movieSvc:MovieTMDBService,
    public dataTransfer: DataTransferService)  {
    console.log(this);
  }
  
  ngOnInit() { 

    this.moviesFindVideoappModel = this.dataTransfer.getMoviesFindVideoappModel();

    for (let i = 0; i<this.moviesFindVideoappModel.length; i++){
      this.moviesDisplayVideoappModel[i].externalId = this.moviesFindVideoappModel[i].externalId;
      this.moviesDisplayVideoappModel[i].title = this.moviesFindVideoappModel[i].title;
      this.moviesDisplayVideoappModel[i].mediaType = this.moviesFindVideoappModel[i].mediaType;
      this.moviesDisplayVideoappModel[i].viewingStatus = this.moviesFindVideoappModel[i].viewingStatus;
      this.moviesDisplayVideoappModel[i].myScore = this.moviesFindVideoappModel[i].myScore;
    }

    for (this.movieSearch of this.moviesDisplayVideoappModel){
      this.movieSearchId = this.movieSearch.externalId;
      this.movieSvc.getMovieDetailsFromApi(this.movieSearchId);
      this.movieSvc.getMovieDetails$()
      .subscribe(
        (movie) =>{
          this.movieSearch.overview = movie.overview;
          this.movieSearch.posterPath = movie.posterPath;
          this.movieSearch.releaseDate = movie.releaseDate;
          this.movieSearch.voteAverage = movie.voteAverage;
        }
      )
    }

    for (let i = 0; i<this.moviesDisplayVideoappModel.length; i++){
      this.movies[i] = this.moviesDisplayVideoappModel[i];
    }

    this.dataTransfer.setMoviesDisplayVideoappModel(this.movies);
  }

  getImgFullUrl(urlFragment:string):string {
    // https://image.tmdb.org/t/p/w500/faXT8V80JRhnArTAeYXz0Eutpv9.jpg
    return 'https://image.tmdb.org/t/p/w500'+ urlFragment;
  }
  
  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.movieSvc.setSearchedMovies$([]);
  }
}
