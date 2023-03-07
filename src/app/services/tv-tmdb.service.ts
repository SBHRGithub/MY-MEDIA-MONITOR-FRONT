import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';
import { TVSearchTMDBModel } from '../shared/models/tv-search-tmdb.model';
import { TVDetailsTMDBModel } from '../shared/models/tv-details-tmdb.model';

@Injectable({
  providedIn: 'root'
})
export class TvTmdbService {

  environmenT = environment;

  private tvDetails$ = new BehaviorSubject<TVDetailsTMDBModel | any>({});
  private searchedTvs$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private http:HttpClient) { 
    console.log(this);
  }

  public getTvDetails$():Observable<TVDetailsTMDBModel> {
    return this.tvDetails$.asObservable();
  }

  public setTvDetails$(tv: TVDetailsTMDBModel): void {
    this.tvDetails$.next(tv);
  }

  public getSearchedTvs$():Observable<TVSearchTMDBModel[]> {
    return this.searchedTvs$.asObservable();
  }

  public setSearchedTvs$(tvs: TVSearchTMDBModel[]): void {
    this.searchedTvs$.next(tvs);
  }

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
    .subscribe( (tv:TVDetailsTMDBModel) => this.tvDetails$.next(tv));
  }



}
