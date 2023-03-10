import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormGroup} from '@angular/forms';
import { TvFindVideoappModel } from '../shared/models/tv-find-videoapp.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TvVideoappFindService {

  environmenT = environment;

  searchedTvs$ = new BehaviorSubject<TvFindVideoappModel[]>([]);
  userData: any;

  constructor(private http:HttpClient) { }

  find(followForm: FormGroup): void{
    let userDataInStorage = localStorage.getItem('userData');
    this.userData = userDataInStorage!=null?JSON.parse(userDataInStorage):{};
    
    let params = new HttpParams()
    .set('email', this.userData.email)
    .set('title', followForm.value.title)
    .set('mediaType', 'movie')
    .set('viewingStatus', followForm.value.viewingStatus)
    .set('myScore', followForm.value.myScore);

    this.http.get(this.environmenT.API_VIDEOAPP_MOVIEFIND, {params})
    .pipe(
      map((apiResponse:any) => {
        return apiResponse.results.map((tvFind:any) => new TvFindVideoappModel(tvFind))
      })
    )
    .subscribe((foundTvs:TvFindVideoappModel[]) => this.searchedTvs$.next(foundTvs));
  }  
}
