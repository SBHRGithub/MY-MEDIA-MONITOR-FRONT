import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup} from '@angular/forms';
import { MovieDetailsTMDBModel } from '../shared/models/movie-details-tmdb.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MovieVideoappUpdateService {

  environmenT = environment;
  userData: any;

  constructor(
    private http:HttpClient
  ) { }

  update(movie: MovieDetailsTMDBModel, cardForm: FormGroup){
    let userDataInStorage = localStorage.getItem('userData');
    this.userData = userDataInStorage!=null?JSON.parse(userDataInStorage):{};

    console.log("Movie delivered to update service");
    console.log(movie);

    console.log("CardForm delivered to update service");
    console.log(cardForm);

    let movieUpdateVideoapp = {
      email: this.userData.email,
      title: movie.title,
      externalId: movie.externalId,
      mediaType: movie.mediaType,
      viewingStatus: cardForm.value.viewingStatus,
      myScore: cardForm.value.myScore
    }
    console.log("Http post for update coming")
    console.log(movieUpdateVideoapp);

    return this.http.post(this.environmenT.API_VIDEOAPP_MOVIEUPDATE, movieUpdateVideoapp);
  }
}
