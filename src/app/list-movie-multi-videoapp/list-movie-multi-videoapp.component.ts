import { Component } from '@angular/core';
import { DataTransferService } from '../services/data-transfer.service';
import { MovieVideoappFindService } from '../services/movie-videoapp-find.service';
import { MovieFindVideoappModel } from '../shared/models/movie-find-videoapp.model';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-list-movie-multi-videoapp',
  templateUrl: './list-movie-multi-videoapp.component.html',
  styleUrls: ['./list-movie-multi-videoapp.component.css']
})
export class ListMovieMultiVideoappComponent {
  
  movie!:MovieFindVideoappModel;
  movies : Array<MovieFindVideoappModel>=[];
  subscription:any;
  followForm!: FormGroup;

  constructor(

    public dataSvc: DataTransferService,
    public movieSvc:MovieVideoappFindService) {}
  
  ngOnInit() { 

    this.movies = this.dataSvc.getMoviesFind();
    this.followForm = this.dataSvc.getFollowForm();
    this.movieSvc.find(this.followForm);
  }

  getImgFullUrl(urlFragment:string):string {
    // https://image.tmdb.org/t/p/w500/faXT8V80JRhnArTAeYXz0Eutpv9.jpg
    return 'https://image.tmdb.org/t/p/w500'+ urlFragment;
  }
  
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  onClick(movie: MovieFindVideoappModel){
    console.log(movie + " reçu par liste");
    this.dataSvc.setMovieFind(movie);
  }
}
