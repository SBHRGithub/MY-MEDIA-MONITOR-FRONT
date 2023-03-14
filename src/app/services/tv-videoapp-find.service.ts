import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';
import { TvTmdbService } from './tv-tmdb.service';
import { TVDetailsTMDBModel } from '../shared/models/tv-details-tmdb.model';
import { TvFindVideoappModel } from '../shared/models/tv-find-videoapp.model';
import { TvDisplayVideoappModel } from '../shared/models/tv-display-videoapp.model';
import { environment } from 'src/environments/environment.development';
import { TvListVideoappModel } from '../shared/models/tv-list-videoapp.model';


@Injectable({
  providedIn: 'root'
})
export class TvVideoappFindService {

  environmenT = environment;
  userData: any;
  tvsFind:TvFindVideoappModel[]= [];
  tvsDisplay: TvDisplayVideoappModel[]= [];
  tvs:TvListVideoappModel[]= [];

  constructor(
    private http:HttpClient,
    public alertSvc: AlertService,
    public dataSvc: DataTransfer,
    public tvSvc: TvTmdbService,
    public router:Router) { }


  find(followForm: FormGroup): void{
    let userDataInStorage = localStorage.getItem('userData');
    this.userData = userDataInStorage!=null?JSON.parse(userDataInStorage):{};
    
    let params = new HttpParams()
    .set('email', this.userData.email)
    .set('name', followForm.value.title)
    .set('mediaType', 'tv')
    .set('viewingStatus', followForm.value.viewingStatus)
    .set('myScore', followForm.value.myScore);

    this.http.get(this.environmenT.API_VIDEOAPP_TVFIND, {params})
    .pipe(
      map((apiResponse:any) => {
        return apiResponse.results.map((tv:any) => new TvFindVideoappModel(tv))
      })
    )
    .subscribe(
      {
        next: (response:any) => {           
          this.tvsFind = response;
          if (this.tvsFind.length == 0){
            this.alertSvc.showAlert("Your tv request has no answer");
          }
          else{
            this.tvsDisplay = this.tvsFind
            .map((tv:TvFindVideoappModel) => new TvDisplayVideoappModel(tv)
            );

            for (let element of this.tvsDisplay){
              this.tvSvc.getTvDetailsFromApi(element.externalId);
              this.tvSvc.getTvDetails$()
              .subscribe(
                (tv: TVDetailsTMDBModel) => {
                  console.log(tv);
                  element.firstAirDate = tv.firstAirDate;
                  element.numberOfEpisodes = tv.numberOfEpisodes;
                  element.numberOfSeasons = tv.numberOfSeasons;
                  element.overview = tv.overview;
                  element.posterPath = tv.posterPath;
                  element.voteAverage = tv.voteAverage;
                }
              );    
            }

            this.tvs = this.tvsDisplay
            .map((tv: TvDisplayVideoappModel) => new TvListVideoappModel(tv));

            this.router.navigate(['/list-tv-multi-videoapp']);
          }
        }
      }        
    );      
  }
}
