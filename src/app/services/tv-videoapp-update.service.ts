import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup} from '@angular/forms';
import { TVDetailsTMDBModel } from '../shared/models/tv-details-tmdb.model';
import { TvFindVideoappModel } from '../shared/models/tv-find-videoapp.model';
import { environment } from 'src/environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class TvVideoappUpdateService {
  environmenT = environment;
  userData: any;

  constructor(
    private http:HttpClient
  ) { }

  update(tv: TVDetailsTMDBModel, cardForm: FormGroup){
    let userDataInStorage = localStorage.getItem('userData');
    this.userData = userDataInStorage!=null?JSON.parse(userDataInStorage):{};

    console.log("TV delivered to update service");
    console.log(tv);

    console.log("CardForm delivered to update service");
    console.log(cardForm);

    let tvUpdateVideoapp = {
      email: this.userData.email,
      name: tv.name,
      externalId: tv.externalId,
      mediaType: tv.mediaType,
      viewingStatus: cardForm.value.viewingStatus,
      myScore: cardForm.value.myScore,
      ongoingSeason: cardForm.value.ongoingSeason,
      ongoingEpisode: cardForm.value.ongoingEpisode
    }
    console.log("Http post for update coming")
    console.log(tvUpdateVideoapp);

    return this.http.post(this.environmenT.API_VIDEOAPP_TVUPDATE, tvUpdateVideoapp);
  }

  updateFollow(tvFind: TvFindVideoappModel, cardForm: FormGroup){
    let userDataInStorage = localStorage.getItem('userData');
    this.userData = userDataInStorage!=null?JSON.parse(userDataInStorage):{};

    console.log("TV delivered to update service");
    console.log(tvFind);

    console.log("CardForm delivered to update service");
    console.log(cardForm);

    let tvUpdateFollowVideoapp = {
      email: this.userData.email,
      name: tvFind.name,
      externalId: tvFind.externalId,
      mediaType: tvFind.mediaType,
      viewingStatus: cardForm.value.viewingStatus,
      myScore: cardForm.value.myScore,
      ongoingSeason: cardForm.value.ongoingSeason,
      ongoingEpisode: cardForm.value.ongoingEpisode
    }
    console.log("Http post for update coming")
    console.log(tvUpdateFollowVideoapp);

    return this.http.post(this.environmenT.API_VIDEOAPP_TVUPDATE, tvUpdateFollowVideoapp);
  }
}
