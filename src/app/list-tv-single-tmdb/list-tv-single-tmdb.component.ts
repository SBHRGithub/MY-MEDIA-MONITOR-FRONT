import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TvTmdbService } from '../services/tv-tmdb.service';
import { DataTransferService } from '../services/data-transfer.service';
import { TVDetailsTMDBModel } from '../shared/models/tv-details-tmdb.model';



@Component({
  selector: 'app-list-tv-single-tmdb',
  templateUrl: './list-tv-single-tmdb.component.html',
  styleUrls: ['./list-tv-single-tmdb.component.css']
})
export class ListTvSingleTmdbComponent {
  
  tv!:TVDetailsTMDBModel;
  tvId:number = 0;

  constructor(
    private route:ActivatedRoute,
    private tvSvc:TvTmdbService,
    public dataSvc: DataTransferService
    ) {}

    ngOnInit() {

      console.log( this.route.snapshot.params) // {id: 123456}
      this.tvId = this.route.snapshot.params['id'];
  
      this.tvSvc.getTvDetailsFromApi(this.tvId);
  
      this.tvSvc.getTvDetails$()
      .subscribe(
        (tv:TVDetailsTMDBModel) => {
          console.log(tv);
          this.tv = tv;
        }
      );
    }

    getImgFullUrl(urlFragment:string):string {
      // https://image.tmdb.org/t/p/w500/faXT8V80JRhnArTAeYXz0Eutpv9.jpg
      return 'https://image.tmdb.org/t/p/w500'+ urlFragment;
    }

    onClick(tv: TVDetailsTMDBModel){
      console.log("Tv received by onClick() after clicking on card-form movie ");
      console.log(tv);

      this.dataSvc.setTv(tv);
    }
}
