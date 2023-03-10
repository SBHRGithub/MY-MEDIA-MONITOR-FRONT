import { Component} from '@angular/core';
import { TvTmdbService } from '../services/tv-tmdb.service';
import { TVSearchTMDBModel } from '../shared/models/tv-search-tmdb.model';
import { TVDetailsTMDBModel } from '../shared/models/tv-details-tmdb.model';
import { DataTransferService } from '../services/data-transfer.service';

@Component({
  selector: 'app-list-tv-multi-tmdb',
  templateUrl: './list-tv-multi-tmdb.component.html',
  styleUrls: ['./list-tv-multi-tmdb.component.css']
})
export class ListTvMultiTmdbComponent {
  tv!:TVDetailsTMDBModel;
  tvId:number = 0;
  tvs:Array<TVSearchTMDBModel> = [];
  subscription:any;
  tvSearch!: TVSearchTMDBModel;
  tvSearchId = 0;
  query!: string;


  constructor(
    private tvSvc:TvTmdbService,
    public dataTransfer: DataTransferService,
    public dataSvc: DataTransferService)  {
    console.log(this);
  }

  ngOnInit() { 
   
    this.query = this.dataTransfer.getData();
    
    this.tvSvc.searchTvsFromApi(this.query);

    this.subscription = this.tvSvc.searchedTvs$
    .subscribe( (tvsArr:TVSearchTMDBModel[]) => {
      this.tvs = tvsArr;
    });

    for (this.tvSearch of this.tvs){
      this.tvSearchId = this.tvSearch.externalId;
      this.tvSvc.getTvDetailsFromApi(this.tvSearchId);
      this.tvSvc.getTvDetails$()
      .subscribe(
        (tv: TVDetailsTMDBModel) =>{
          this.tv = tv;
          this.tv.genre = " "
        }
      )
    }
  }
  
  getImgFullUrl(urlFragment:string):string {
    // https://image.tmdb.org/t/p/w500/faXT8V80JRhnArTAeYXz0Eutpv9.jpg
    return 'https://image.tmdb.org/t/p/w500'+ urlFragment;
  }
  
  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.subscription.unsubscribe();
    this.tvSvc.setSearchedTvs$([]);
  }

  onClick(tv: TVDetailsTMDBModel){
    console.log(tv + " reçu par liste");
    this.dataSvc.setTv(tv);
  }
}
