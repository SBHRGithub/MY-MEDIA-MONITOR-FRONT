import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MovieTMDBService } from '../services/movie-tmdb.service';
import { DataTransferService } from '../services/data-transfer.service';
import { MovieDetailsTMDBModel } from '../shared/models/movie-details-tmdb.model';


@Component({
  selector: 'app-list-movie-single-tmdb',
  templateUrl: './list-movie-single-tmdb.component.html',
  styleUrls: ['./list-movie-single-tmdb.component.css']
})
export class ListMovieSingleTMDBComponent {

  movie!:MovieDetailsTMDBModel;
  movieId:number = 0;

  constructor(
    private route:ActivatedRoute,
    private movieSvc:MovieTMDBService,
    public dataSvc: DataTransferService
    ) {}


  ngOnInit() {

    console.log( this.route.snapshot.params) // {id: 123456}
    this.movieId = this.route.snapshot.params['id'];

    this.movieSvc.getMovieDetailsFromApi(this.movieId);

    this.movieSvc.getMovieDetails$()
    .subscribe(
      (movie:MovieDetailsTMDBModel) => {
        console.log(movie);
        this.movie = movie;
      }
    );
  }

  getImgFullUrl(urlFragment:string):string {
    // https://image.tmdb.org/t/p/w500/faXT8V80JRhnArTAeYXz0Eutpv9.jpg
    return 'https://image.tmdb.org/t/p/w500'+ urlFragment;
  }

  onClick(movie: MovieDetailsTMDBModel){
    console.log("Movie received by onClick() after clicking on card-form movie ");
    console.log(movie);

    this.dataSvc.setMovie(movie);
  }
}
