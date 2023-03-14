import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';
import { MovieFindVideoappModel } from '../shared/models/movie-find-videoapp.model';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class MovieVideoappFindService {

  environmenT = environment;
  movies:MovieFindVideoappModel[]= [];
  userData: any;

  constructor(
    private http:HttpClient,
    public alertSvc: AlertService,
    public dataSvc: DataTransfer,
    public router:Router) { }

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
        return apiResponse.results.map((movie:any) => new MovieFindVideoappModel(movie))
      })
    )
    .subscribe(
      {
        next: (response:any) => {
          this.movies = response;                    
          if (this.movies.length == 0){
              this.alertSvc.showAlert("Your movie request has no answer");
          }
          else{
              this.router.navigate(['/list-movie-multi-videoapp']);
          }          
        }
      }        
    );      
  }
}
