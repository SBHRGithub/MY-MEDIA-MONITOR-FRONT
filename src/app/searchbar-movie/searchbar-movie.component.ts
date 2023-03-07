import { Component } from '@angular/core';
import { MovieTMDBService } from '../services/movie-tmdb.service';
import { MovieSearchTMDBModel } from '../shared/models/movie-search-tmdb.model';
import { DataTransferService } from '../services/data-transfer.service';


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
    public dataTransfer: DataTransferService) {}

  ngOnInit() {
    this.movieSvc.getSearchedMovies$()
    .subscribe( (foundMovies:MovieSearchTMDBModel[]) => this.searchedMovies = foundMovies);
  }

  onKeyupInput(userSearch:string) {
    //let essai = userSearch;
    //localStorage.setItem('userSearch', essai);
    this.query = userSearch;
    console.log(this.query);
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
