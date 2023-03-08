import { Component } from '@angular/core';
import { MovieTMDBService } from '../services/movie-tmdb.service';
import { MovieSearchTMDBModel } from '../shared/models/movie-search-tmdb.model';
import { DataTransferService } from '../services/data-transfer.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-searchbar-movie',
  templateUrl: './searchbar-movie.component.html',
  styleUrls: ['./searchbar-movie.component.css']
})
export class SearchbarMovieComponent {

  public searchedMovies: MovieSearchTMDBModel[]=[];
  public query!: string;

  constructor(
    private movieSvc: MovieTMDBService,
    public dataTransfer: DataTransferService,
    public userSvc : UserService) {}

  ngOnInit() {
    this.movieSvc.getSearchedMovies$()
    .subscribe( (foundMovies:MovieSearchTMDBModel[]) => this.searchedMovies = foundMovies);
  }

  onKeyupInput(userSearch:string) {

    this.query = userSearch;
    this.dataTransfer.setData(this.query);
    
    if(userSearch.length==0) {
      this.movieSvc.setSearchedMovies$([]);
    }
    else {
      if(userSearch.length>4){
      this.movieSvc.searchMoviesFromApi(userSearch);

      }
    }
  }

  ngOnDestroy() {
    this.movieSvc.setSearchedMovies$([]);
  }



}
