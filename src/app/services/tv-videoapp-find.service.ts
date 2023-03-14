import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';
import { TvTmdbService } from './tv-tmdb.service';
import { DataTransferService } from './data-transfer.service';
import { TVDetailsTMDBModel } from '../shared/models/tv-details-tmdb.model';
import { TvFindVideoappModel } from '../shared/models/tv-find-videoapp.model';
import { TvDisplayVideoappModel } from '../shared/models/tv-display-videoapp.model';
import { TvListVideoappModel } from '../shared/models/tv-list-videoapp.model';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class TvVideoappFindService {

  environmenT = environment;
  userData: any;
  tv!: TvListVideoappModel;
  tvsFind:TvFindVideoappModel[]= [];
  tvsDisplay: TvDisplayVideoappModel[]= [];
  tvs:TvListVideoappModel[]= [];

  constructor(
    private http:HttpClient,
    public alertSvc: AlertService,
    public dataSvc: DataTransferService,
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
          console.log(this.tvsFind);
          if (this.tvsFind.length == 0){
            this.alertSvc.showAlert("Your tv request has no answer");
          }
          else{
            /*
            this.tvsDisplay = this.tvsFind
            .map((tv:TvFindVideoappModel) => new TvDisplayVideoappModel(tv)
            );

            console.log(this.tvsDisplay);
            */

            for (let element of this.tvsFind){
              console.log(element);
              this.tvSvc.getTvDetailsFromApi(element.externalId);
              this.tvSvc.getTvDetails$()
              .subscribe(
                {
                  next: (response:any) =>{
                    if(response) {
                        console.log(response);

                        (tv: TVDetailsTMDBModel) => {
                            console.log(tv);

                            this.tv.externalId = element.externalId;
                            this.tv.name = element.name;
                            this.tv.mediaType = element.mediaType;
                            this.tv.genre = " ";
                            this.tv.overview = tv.overview;
                            this.tv.posterPath = tv.posterPath;
                            this.tv.firstAirDate = tv.firstAirDate;
                            this.tv.firstAirDate = tv.firstAirDate;
                            this.tv.numberOfEpisodes = tv.numberOfEpisodes;
                            this.tv.numberOfSeasons = tv.numberOfSeasons;
                            this.tv.voteAverage = tv.voteAverage;
                            this.tv.viewingStatus = element.viewingStatus;
                            this.tv.myScore = element.myScore;
                            this.tv.ongoingSeason = element.ongoingSeason;
                            this.tv.ongoingEpisode = element.ongoingEpisode;

                            this.tvs.push(this.tv);

                            console.log(this.tvs);

                        
                            this.dataSvc.setTvsList(this.tvs);
                            this.router.navigate(['/list-tv-multi-videoapp']);
                        }                 
                     }
                    /*
                    element.firstAirDate = tv.firstAirDate;
                    element.numberOfEpisodes = tv.numberOfEpisodes;
                    element.numberOfSeasons = tv.numberOfSeasons;
                    element.overview = tv.overview;
                    element.posterPath = tv.posterPath;
                    element.voteAverage = tv.voteAverage;
                    */
                  }
                }
              );    
            }

//            console.log(this.tvsDisplay);

//            this.tvs = this.tvsDisplay
//            .map((tv: TvDisplayVideoappModel) => new TvListVideoappModel(tv));

//            console.log(this.tvs);

//            this.dataSvc.setTvsList(this.tvs);

//            this.router.navigate(['/list-tv-multi-videoapp']);
          }
        }
      }        
    );      
  }
}
