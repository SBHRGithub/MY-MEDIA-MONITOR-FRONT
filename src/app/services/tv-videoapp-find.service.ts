import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';
import { DataTransferService } from './data-transfer.service';
import { TvFindVideoappModel } from '../shared/models/tv-find-videoapp.model';//*Add*
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TvVideoappFindService {

  environmenT = environment;
  userData: any;
  tv!: TvFindVideoappModel;
  tvFind!: TvFindVideoappModel;
  tvFindId =0;
  tvsFind:TvFindVideoappModel[]= [];
  tvs: Array<TvFindVideoappModel> = [];
  searchedTvs$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(
    private http:HttpClient,
    public alertSvc: AlertService,
    public dataSvc: DataTransferService,
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
    .subscribe((foundTvs:TvFindVideoappModel[]) => {
      this.searchedTvs$.next(foundTvs);
      console.log(this.searchedTvs$);
    });                 
  }

  public getSearchedTvs$():Observable<TvFindVideoappModel[]> {
    return this.searchedTvs$.asObservable();
  }

}
