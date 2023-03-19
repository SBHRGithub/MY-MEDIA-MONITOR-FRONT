import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieSearchTMDBModel } from '../shared/models/movie-search-tmdb.model';
import { MovieDetailsTMDBModel } from '../shared/models/movie-details-tmdb.model';
import { MovieTMDBService } from '../services/movie-tmdb.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public searchedMovies: MovieSearchTMDBModel[]=[];
  movie!:MovieDetailsTMDBModel;
  movieId:number = 0;

  constructor(
    private route:ActivatedRoute, 
    private router:Router,
    private movieSvc: MovieTMDBService,
    private sanitizer: DomSanitizer,
    public userSvc : UserService
    ){
    console.log(this);
  }

  ngonInit(){
    console.log( this.route.snapshot.params + "snap");
    this.movieId = this.route.snapshot.params['id'];

   // console.log(this.movieSvc.getExternalIdTemp() + "list");
   // this.movieSvc.getMovieDetailsFromApi(this.movieSvc.getExternalIdTemp());
   this.movieSvc.getSearchedMovies$()
    .subscribe( (foundMovies:MovieSearchTMDBModel[]) => this.searchedMovies = foundMovies);

  }

  getImgFullUrl(urlFragment:string):string {
    return 'https://image.tmdb.org/t/p/w500'+ urlFragment;
  }

  ngOnDestroy() {
    console.log('I am ngOnDestroy');
  }

}
