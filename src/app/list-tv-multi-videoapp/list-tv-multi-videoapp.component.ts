import { Component } from '@angular/core';
import { TvTmdbService } from '../services/tv-tmdb.service';
import { DataTransferService } from '../services/data-transfer.service';
import { TVDetailsTMDBModel } from '../shared/models/tv-details-tmdb.model';
import { TvFindVideoappModel } from '../shared/models/tv-find-videoapp.model';
import { TvDisplayVideoappModel } from '../shared/models/tv-display-videoapp.model';
import { TvListVideoappModel } from '../shared/models/tv-list-videoapp.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-tv-multi-videoapp',
  templateUrl: './list-tv-multi-videoapp.component.html',
  styleUrls: ['./list-tv-multi-videoapp.component.css']
})
export class ListTvMultiVideoappComponent {
  
  tvSearch!: TvDisplayVideoappModel;
  tvs : TvListVideoappModel[] = [];
  tvsDisplayVideoappModel: TvDisplayVideoappModel [] = [];
  tvsFindVideoappModel!:TvFindVideoappModel[];

  constructor(
    private tvSvc:TvTmdbService,
    public dataSvc: DataTransferService)  {
    console.log(this);
  }

  ngOnInit() { 
    
    this.tvs = this.dataSvc.getTvsList();
    
  }

  getImgFullUrl(urlFragment:string):string {
    // https://image.tmdb.org/t/p/w500/faXT8V80JRhnArTAeYXz0Eutpv9.jpg
    return 'https://image.tmdb.org/t/p/w500'+ urlFragment;
  }

  isDefined(data:any):boolean {
    if(data!=null && data!=undefined && data!=false) {
      return true;
    }
    return false;
  }
  
  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.tvSvc.setSearchedTvs$([]);
  }
}
