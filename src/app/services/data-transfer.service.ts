import { Injectable } from '@angular/core';
import { MovieDetailsTMDBModel } from '../shared/models/movie-details-tmdb.model';
import { MovieFindVideoappModel } from '../shared/models/movie-find-videoapp.model';
import { MovieDisplayVideoappModel } from '../shared/models/movie-display-videoapp.model';
import { TvDisplayVideoappModel } from '../shared/models/tv-display-videoapp.model';
import { TVDetailsTMDBModel } from '../shared/models/tv-details-tmdb.model';
import { TvFindVideoappModel } from '../shared/models/tv-find-videoapp.model';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  data!: string;
  movie!: MovieDetailsTMDBModel;
  tv!: TVDetailsTMDBModel;
  moviesFindVideoappModel!: MovieFindVideoappModel[];
  tvsFindVideoappModel!: TvFindVideoappModel[];
  moviesDisplayVideoappModel!: MovieDisplayVideoappModel[];
  tvsDisplayVideoappModel!: TvDisplayVideoappModel[];

  constructor() { }

  public getData(): string{
    return this.data;
  }
  public setData(data:string): void{
    this.data=data;
  }

  public getMovie(): MovieDetailsTMDBModel{
    return this.movie;
  }

  public setMovie(movie: MovieDetailsTMDBModel){
    this.movie=movie;

    console.log("Setted movie by DataTransferService");
    console.log(movie)
  }

  public getTv(): TVDetailsTMDBModel{
    return this.tv;
  }

  public setTv(tv: TVDetailsTMDBModel){
    this.tv=tv;

    console.log("Setted movie by DataTransferService");
    console.log(tv)
  }

  public getMoviesFindVideoappModel(): MovieFindVideoappModel[]{
    return this.moviesFindVideoappModel;
  }
  
  public setMoviesFindVideoappModel(movies: MovieFindVideoappModel[]){
    this.moviesFindVideoappModel = movies;
    ;
  }
  
  public getTvsFindVideoappModel(): TvFindVideoappModel[]{
    return this.tvsFindVideoappModel;
  }
  
  public setTvsFindVideoappModel(tvs: TvFindVideoappModel[]){
    this.tvsFindVideoappModel = tvs;
    ;
  }

  public getMoviesDisplayVideoappModel(): MovieDisplayVideoappModel[]{
    return this.moviesDisplayVideoappModel;
  }
  
  public setMoviesDisplayVideoappModel(movies: MovieDisplayVideoappModel[]){
    this.moviesDisplayVideoappModel = movies;
    ;
  }

  public getTvsDisplayVideoappModel(): TvDisplayVideoappModel[]{
    return this.tvsDisplayVideoappModel;
  }
  
  public setTvsDisplayVideoappModel(tvs: TvDisplayVideoappModel[]){
    this.tvsDisplayVideoappModel = tvs;
    ;
  }
}
