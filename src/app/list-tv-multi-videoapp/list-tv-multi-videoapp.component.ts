import { Component } from '@angular/core';
import { TvTmdbService } from '../services/tv-tmdb.service';
import { DataTransferService } from '../services/data-transfer.service';
import { TVDetailsTMDBModel } from '../shared/models/tv-details-tmdb.model';
import { TvFindVideoappModel } from '../shared/models/tv-find-videoapp.model';
import { TvDisplayVideoappModel } from '../shared/models/tv-display-videoapp.model';

@Component({
  selector: 'app-list-tv-multi-videoapp',
  templateUrl: './list-tv-multi-videoapp.component.html',
  styleUrls: ['./list-tv-multi-videoapp.component.css']
})
export class ListTvMultiVideoappComponent {
  
  tvSearch!: TvDisplayVideoappModel;
  tvSearchId = 0;
  tvsFindVideoappModel!: TvFindVideoappModel[];
  tvDetailsTMDBModel!:TVDetailsTMDBModel;
  tvsDetailsTMDBModel!:TVDetailsTMDBModel[];
  tvsDisplayVideoappModel!: TvDisplayVideoappModel [];
  tv!: TvDisplayVideoappModel;
  tvs!: TvDisplayVideoappModel[];

  constructor(
    private tvSvc:TvTmdbService,
    public dataTransfer: DataTransferService)  {
    console.log(this);
  }

  ngOnInit() { 
   
    this.tvsFindVideoappModel = this.dataTransfer.getTvsFindVideoappModel();

    console.log(this.tvsFindVideoappModel);

    for (let i = 0; i<this.tvsFindVideoappModel.length; i++){
      this.tvsDisplayVideoappModel[i].externalId = this.tvsFindVideoappModel[i].externalId;
      this.tvsDisplayVideoappModel[i].name = this.tvsFindVideoappModel[i].name;
      this.tvsDisplayVideoappModel[i].mediaType = this.tvsFindVideoappModel[i].mediaType;
      this.tvsDisplayVideoappModel[i].viewingStatus = this.tvsFindVideoappModel[i].viewingStatus;
      this.tvsDisplayVideoappModel[i].myScore = this.tvsFindVideoappModel[i].myScore;
    }

    for (this.tvSearch of this.tvsDisplayVideoappModel){
      this.tvSearchId = this.tvSearch.externalId;
      this.tvSvc.getTvDetailsFromApi(this.tvSearchId);
      this.tvSvc.getTvDetails$()
      .subscribe(
        (tv) =>{
          this.tvSearch.overview = tv.overview;
          this.tvSearch.posterPath = tv.posterPath;
          this.tvSearch.firstAirDate = tv.firstAirDate;
          this.tvSearch.voteAverage = tv.voteAverage;
        }
      )
    }

    for (let i = 0; i<this.tvsDisplayVideoappModel.length; i++){
      this.tvs[i] = this.tvsDisplayVideoappModel[i];
    }

    this.dataTransfer.setTvsDisplayVideoappModel(this.tvs);
  }

  getImgFullUrl(urlFragment:string):string {
    // https://image.tmdb.org/t/p/w500/faXT8V80JRhnArTAeYXz0Eutpv9.jpg
    return 'https://image.tmdb.org/t/p/w500'+ urlFragment;
  }
  
  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.tvSvc.setSearchedTvs$([]);
  }
}
