import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DataTransferService } from '../services/data-transfer.service';
import { MovieFindVideoappModel } from '../shared/models/movie-find-videoapp.model';

@Component({
  selector: 'app-list-movie-single-videoapp',
  templateUrl: './list-movie-single-videoapp.component.html',
  styleUrls: ['./list-movie-single-videoapp.component.css']
})
export class ListMovieSingleVideoappComponent {

    movie!:MovieFindVideoappModel;
    movieId:number = 0;

  constructor(
    public route:ActivatedRoute,
    public dataSvc: DataTransferService){}

  ngOnInit() {

    console.log( this.route.snapshot.params) // {id: 123456}
    this.movieId = this.route.snapshot.params['id'];

    this.movie = this.dataSvc.getMovieFind();
    console.log(this.movie)
  }

  getImgFullUrl(urlFragment:string):string {
    // https://image.tmdb.org/t/p/w500/faXT8V80JRhnArTAeYXz0Eutpv9.jpg
    return 'https://image.tmdb.org/t/p/w500'+ urlFragment;
  }

  onClick(movie: MovieFindVideoappModel){

    this.dataSvc.setMovieFind(movie);
  }







}
