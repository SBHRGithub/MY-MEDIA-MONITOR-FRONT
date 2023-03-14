import { Component } from '@angular/core';
import { MovieTMDBService } from '../services/movie-tmdb.service';
import { DataTransferService } from '../services/data-transfer.service';
import { MovieFindVideoappModel } from '../shared/models/movie-find-videoapp.model';
import { MovieDisplayVideoappModel } from '../shared/models/movie-display-videoapp.model';
import { MovieListVideoappModel } from '../shared/models/movie-list-videoapp.model';
@Component({
  selector: 'app-list-movie-multi-videoapp',
  templateUrl: './list-movie-multi-videoapp.component.html',
  styleUrls: ['./list-movie-multi-videoapp.component.css']
})
export class ListMovieMultiVideoappComponent {
  
  movieSearch!: MovieDisplayVideoappModel;
  movies : MovieListVideoappModel[] = [];
  moviesDisplayVideoappModel: MovieDisplayVideoappModel [] = [];
  moviesFindVideoappModel!:MovieFindVideoappModel[];

  constructor(

    private movieSvc:MovieTMDBService,
    public dataSvc: DataTransferService)  {}
  
  ngOnInit() { 

    this.movies = this.dataSvc.getMoviesList();

  }

  getImgFullUrl(urlFragment:string):string {
    // https://image.tmdb.org/t/p/w500/faXT8V80JRhnArTAeYXz0Eutpv9.jpg
    return 'https://image.tmdb.org/t/p/w500'+ urlFragment;
  }
  
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
