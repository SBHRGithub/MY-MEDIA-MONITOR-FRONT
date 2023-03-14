import { Component } from '@angular/core';
import { TvTmdbService } from '../services/tv-tmdb.service';
import { DataTransferService } from '../services/data-transfer.service';
import { TvFindVideoappModel } from '../shared/models/tv-find-videoapp.model';
import { TvDisplayVideoappModel } from '../shared/models/tv-display-videoapp.model';
import { TvListVideoappModel } from '../shared/models/tv-list-videoapp.model';

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
    public dataSvc: DataTransferService)  {}

  ngOnInit() { 
    
    this.tvs = this.dataSvc.getTvsList();
    
  }

  getImgFullUrl(urlFragment:string):string {
    // https://image.tmdb.org/t/p/w500/faXT8V80JRhnArTAeYXz0Eutpv9.jpg
    return 'https://image.tmdb.org/t/p/w500'+ urlFragment;
  }
  
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
