import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { MovieDetailsTMDBModel } from '../shared/models/movie-details-tmdb.model';
import { MovieFindVideoappModel } from '../shared/models/movie-find-videoapp.model';
import { TVDetailsTMDBModel } from '../shared/models/tv-details-tmdb.model';
import { TvFindVideoappModel } from '../shared/models/tv-find-videoapp.model';


@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  data!: string;
  movie!: MovieDetailsTMDBModel;
  tv!: TVDetailsTMDBModel;
  movieFind!: MovieFindVideoappModel;  
  moviesFind!: MovieFindVideoappModel[];
  tvFind!: TvFindVideoappModel;
  tvsFind!: TvFindVideoappModel[];
  followForm!: FormGroup;

  constructor() { }

  public getData(): string{
    return this.data;
  }

  public setData(data:string): void{
    this.data=data;
  }

  public getFollowForm(): FormGroup {
    return this.followForm;
  }

  public setFollowForm(followForm:FormGroup): void{
    this.followForm=followForm;
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

  public getMovieFind(): MovieFindVideoappModel{
    return this.movieFind;
  }
  
  public setMovieFind(movie: MovieFindVideoappModel): void{
    this.movieFind = movie;
  }

  public getMoviesFind(): MovieFindVideoappModel[]{
    return this.moviesFind;
  }
  
  public setMoviesFind(movies: MovieFindVideoappModel[]): void{
    this.moviesFind = movies;
  }

  public getTvFind(): TvFindVideoappModel{
    return this.tvFind;
  }
  
  public setTvFind(tv: TvFindVideoappModel): void{
    this.tvFind = tv;
  }

  public getTvsFind(): TvFindVideoappModel[]{
    return this.tvsFind;
  }
  
  public setTvsFind(tvs: TvFindVideoappModel[]): void{
    this.tvsFind = tvs;
  }
}
