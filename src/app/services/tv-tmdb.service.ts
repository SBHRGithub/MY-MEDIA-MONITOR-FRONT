import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';
import { TVSearchTMDBModel } from '../shared/models/tv-search-tmdb.model';
import { TVDetailsTMDBModel } from '../shared/models/tv-details-tmdb.model';
import { MovieDetailsTMDBModel } from '../shared/models/movie-details-tmdb.model';

@Injectable({
  providedIn: 'root'
})
export class TvTmdbService {

  environmenT = environment;

  tvDetails$ = new BehaviorSubject<TVDetailsTMDBModel | any>({});
  searchedTvs$: BehaviorSubject<any> = new BehaviorSubject([]);
  private _tvDetails$ = new BehaviorSubject<TVDetailsTMDBModel | any>({});

  constructor(private http:HttpClient) { }
 
  searchTvsFromApi(userSearch:string): void{
    let params = new HttpParams()
    .set('api_key', this.environmenT.API_KEY_TMDB)
    .set('language', 'fr')
    .set('query',userSearch);

    this.http.get(this.environmenT.API_TMDB_SEARCHTVSHOWS, {params})
    .pipe(
      map( (apiResponse:any) => {
        return apiResponse.results.map((tv:any) => new TVSearchTMDBModel(tv))
      })
    )
    .subscribe((foundTvs:TVSearchTMDBModel[]) => this.searchedTvs$.next(foundTvs));
  }

  getTvDetailsFromApi(externalId:number): void{
    let params = new HttpParams()
    .set('api_key', this.environmenT.API_KEY_TMDB)
    .set('language', 'fr');

    this.http.get(this.environmenT.API_TMDB_GETTVSHOWSDETAILS + '/' + externalId, {params})
    .pipe(
      map( (apiResponse:any) => new TVDetailsTMDBModel(apiResponse))
    )
    .subscribe( (tv:TVDetailsTMDBModel) => {
      console.log(tv);
      this.tvDetails$.next(tv);
    });
  }

  public getTvDetails$():Observable<TVDetailsTMDBModel> {
    return this.tvDetails$.asObservable();
  }

  public getSearchedTvs$():Observable<TVSearchTMDBModel[]> {
    return this.searchedTvs$.asObservable();
  }

  public setSearchedTvs$(tvs: TVSearchTMDBModel[]): void {
    this.searchedTvs$.next(tvs);
  }
}
