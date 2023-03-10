import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormGroup} from '@angular/forms';
import { MovieFindVideoappModel } from '../shared/models/movie-find-videoapp.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MovieVideoappFindService {

  environmenT = environment;

  searchedMovies$ = new BehaviorSubject<MovieFindVideoappModel[]>([]);
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
        return apiResponse.results.map((movieFind:any) => new MovieFindVideoappModel(movieFind))
      })
    )
    .subscribe((foundMovies:MovieFindVideoappModel[]) => this.searchedMovies$.next(foundMovies));
  }
}
