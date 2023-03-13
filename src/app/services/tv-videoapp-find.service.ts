import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';
import { TvFindVideoappModel } from '../shared/models/tv-find-videoapp.model';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class TvVideoappFindService {

  environmenT = environment;
  searchedTvs:TvFindVideoappModel[]= [];

  
  private _searchedTvs$: BehaviorSubject<any> = new BehaviorSubject([]);
  userData: any;
  HttpGetResponse!: Observable<any>;


  constructor(
    private http:HttpClient,
    public alertSvc: AlertService,
    public router:Router) { }

  get searchedTvs$():Observable<TvFindVideoappModel[]> {
    return this._searchedTvs$.asObservable();
  }

  find(followForm: FormGroup): Observable<any> {
    let userDataInStorage = localStorage.getItem('userData');
    this.userData = userDataInStorage!=null?JSON.parse(userDataInStorage):{};
    
    let params = new HttpParams()
    .set('email', this.userData.email)
    .set('title', followForm.value.title)
    .set('mediaType', 'tv')
    .set('viewingStatus', followForm.value.viewingStatus)
    .set('myScore', followForm.value.myScore);

    console.log("get to API_VIDEOAPP_TVFIND to come")

    return this.http.get(this.environmenT.API_VIDEOAPP_TVFIND, {params})
    .pipe(
      map((apiResponse:any) => {
        console.log("API_VIDEOAPP_TVFIND response");
        console.log(apiResponse);
        console.log(apiResponse.results);
        return apiResponse.results.map((tvFind:any) => new TvFindVideoappModel(tvFind))
      })
    );      
  }
}
