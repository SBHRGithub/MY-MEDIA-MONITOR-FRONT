import { Injectable } from '@angular/core';
import { MovieDetailsTMDBModel } from '../shared/models/movie-details-tmdb.model';
import { MovieFindVideoappModel } from '../shared/models/movie-find-videoapp.model';
import { MovieDisplayVideoappModel } from '../shared/models/movie-display-videoapp.model';
import { MovieListVideoappModel } from '../shared/models/movie-list-videoapp.model';
import { TVDetailsTMDBModel } from '../shared/models/tv-details-tmdb.model';
import { TvFindVideoappModel } from '../shared/models/tv-find-videoapp.model';
import { TvDisplayVideoappModel } from '../shared/models/tv-display-videoapp.model';
import { TvListVideoappModel } from '../shared/models/tv-list-videoapp.model';

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
  tvsList: TvListVideoappModel[] = [];
  moviesList: MovieListVideoappModel[] = [];

  constructor() { }

  public getTvsList(): TvListVideoappModel[]{
    return this.tvsList;
  }

  public setTvsList(tvsList:TvListVideoappModel[]): void{
    this.tvsList=tvsList;
  }

  public getMoviesList(): MovieListVideoappModel[]{
    return this.moviesList;
  }

  public setMoviesList(moviesList:MovieListVideoappModel[]): void{
    this.moviesList=moviesList;
  }
  
  public getData(): string{
    return this.data;
  }

  public setData(data:string): void{
    this.data=data;
  }

  public getMovie(): MovieDetailsTMDBModel{
    return this.movie;
  }

  public setMovie(movie: MovieDetailsTMDBModel): void{
    this.movie=movie;
  }

  public getTv(): TVDetailsTMDBModel{
    return this.tv;
  }

  public setTv(tv: TVDetailsTMDBModel): void{
    this.tv=tv;
  }

  public getMoviesFindVideoappModel(): MovieFindVideoappModel[]{
    return this.moviesFindVideoappModel;
  }
  
  public setMoviesFindVideoappModel(movies: MovieFindVideoappModel[]): void{
    this.moviesFindVideoappModel = movies;
  }
  
  public getMoviesDisplayVideoappModel(): MovieDisplayVideoappModel[]{
    return this.moviesDisplayVideoappModel;
  }
  
  public setMoviesDisplayVideoappModel(movies: MovieDisplayVideoappModel[]): void{
    this.moviesDisplayVideoappModel = movies;
  }

  public getTvsDisplayVideoappModel(): TvDisplayVideoappModel[]{
    return this.tvsDisplayVideoappModel;
  }
  
  public setTvsDisplayVideoappModel(tvs: TvDisplayVideoappModel[]): void{
    this.tvsDisplayVideoappModel = tvs;
  }
}
