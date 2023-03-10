import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TVDetailsTMDBModel } from '../shared/models/tv-details-tmdb.model';
import { TvTmdbService } from '../services/tv-tmdb.service';
import { DataTransferService } from '../services/data-transfer.service';
import { TvDisplayVideoappModel } from '../shared/models/tv-display-videoapp.model';

@Component({
  selector: 'app-list-tv-single-videoapp',
  templateUrl: './list-tv-single-videoapp.component.html',
  styleUrls: ['./list-tv-single-videoapp.component.css']
})
export class ListTvSingleVideoappComponent {

  tv!:TvDisplayVideoappModel;
  tvId:number = 0;
  tvs!: TvDisplayVideoappModel[];

  constructor(
    public route:ActivatedRoute,
    public tvSvc:TvTmdbService,
//    public dataSvc: DataTransferService
    public dataTransfer: DataTransferService
    ) {}

    ngOnInit() {

      console.log( this.route.snapshot.params) // {id: 123456}
      this.tvId = this.route.snapshot.params['id'];

      this.tvs = this.dataTransfer.getTvsDisplayVideoappModel();

/*
      this.tvSvc.getTvDetailsFromApi(this.tvId);
  
      this.tvSvc.getTvDetails$()
      .subscribe(
        (tv:TVDetailsTMDBModel) => {
          console.log(tv);
          this.tv = tv;
        }
      );
*/      
    }

    getImgFullUrl(urlFragment:string):string {
      // https://image.tmdb.org/t/p/w500/faXT8V80JRhnArTAeYXz0Eutpv9.jpg
      return 'https://image.tmdb.org/t/p/w500'+ urlFragment;
    }

    onClick(tv: TVDetailsTMDBModel){
      console.log("Tv received by onClick() after clicking on card-form tv ");
      console.log(tv);
  
      this.dataTransfer.setTv(tv);
    }
}
