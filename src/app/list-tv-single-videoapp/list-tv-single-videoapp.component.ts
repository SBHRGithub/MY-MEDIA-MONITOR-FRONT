import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DataTransferService } from '../services/data-transfer.service';
import { TvFindVideoappModel } from '../shared/models/tv-find-videoapp.model';



@Component({
  selector: 'app-list-tv-single-videoapp',
  templateUrl: './list-tv-single-videoapp.component.html',
  styleUrls: ['./list-tv-single-videoapp.component.css']
})
export class ListTvSingleVideoappComponent {

  tv!:TvFindVideoappModel;
  tvId:number = 0;


  constructor(
    public route:ActivatedRoute,
    public dataSvc: DataTransferService
    ) {}

    ngOnInit() {

      console.log( this.route.snapshot.params) // {id: 123456}
      this.tvId = this.route.snapshot.params['id'];
      
      this.tv= this.dataSvc.getTvFind();
    }

    getImgFullUrl(urlFragment:string):string {
      // https://image.tmdb.org/t/p/w500/faXT8V80JRhnArTAeYXz0Eutpv9.jpg
      return 'https://image.tmdb.org/t/p/w500'+ urlFragment;
    }

    onClick(tv: TvFindVideoappModel){
  
      this.dataSvc.setTvFind(tv);
    }
}
