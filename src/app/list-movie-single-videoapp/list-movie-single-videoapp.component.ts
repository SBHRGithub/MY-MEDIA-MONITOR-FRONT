import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MovieDisplayVideoappModel } from '../shared/models/movie-display-videoapp.model';
import { MovieDetailsTMDBModel } from '../shared/models/movie-details-tmdb.model';
import { MovieTMDBService } from '../services/movie-tmdb.service';
import { DataTransferService } from '../services/data-transfer.service';
import { MovieVideoappUpdateService } from '../services/movie-videoapp-update.service';

@Component({
  selector: 'app-list-movie-single-videoapp',
  templateUrl: './list-movie-single-videoapp.component.html',
  styleUrls: ['./list-movie-single-videoapp.component.css']
})
export class ListMovieSingleVideoappComponent {

//  movie!:MovieDetailsTMDBModel;
    movie!:MovieDisplayVideoappModel;
    movieId:number = 0;
    movies!: MovieDisplayVideoappModel[]

  constructor(
    public route:ActivatedRoute,
//    public movieSvc:MovieTMDBService,
    public movieSvc:MovieVideoappUpdateService,
//    public dataSvc: DataTransferService
    public dataTransfer: DataTransferService
  ){}

  ngOnInit() {

    console.log( this.route.snapshot.params) // {id: 123456}
    this.movieId = this.route.snapshot.params['id'];

    this.movies = this.dataTransfer.getMoviesDisplayVideoappModel();

/*
    this.movieSvc.getMovieDetailsFromApi(this.movieId);

    this.movieSvc.getMovieDetails$()
    .subscribe(
      (movie:MovieDetailsTMDBModel) => {
        console.log(movie);
        this.movie = movie;
      }
    );
*/
  }

  getImgFullUrl(urlFragment:string):string {
    // https://image.tmdb.org/t/p/w500/faXT8V80JRhnArTAeYXz0Eutpv9.jpg
    return 'https://image.tmdb.org/t/p/w500'+ urlFragment;
  }

  onClick(movie: MovieDetailsTMDBModel){
    console.log("Movie received by onClick() after clicking on card-form movie");
    console.log(movie);
    this.dataTransfer.setMovie(movie);
  }







}
