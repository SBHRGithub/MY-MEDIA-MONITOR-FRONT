import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataTransferService } from '../services/data-transfer.service';
import { TvVideoappFindService } from '../services/tv-videoapp-find.service';
import { TvFindVideoappModel } from '../shared/models/tv-find-videoapp.model';


@Component({
  selector: 'app-list-tv-multi-videoapp',
  templateUrl: './list-tv-multi-videoapp.component.html',
  styleUrls: ['./list-tv-multi-videoapp.component.css']
})
export class ListTvMultiVideoappComponent {
  
  tv!:TvFindVideoappModel;
  tvs:Array<TvFindVideoappModel> = [];
  subscription:any;
  followForm!: FormGroup;

  constructor(
    public dataSvc: DataTransferService,
    public tvSvcFind: TvVideoappFindService)  {}

  ngOnInit() { 
    
      this.tvs = this.dataSvc.getTvsFind();
      this.followForm = this.dataSvc.getFollowForm();
      this.tvSvcFind.find(this.followForm);

      this.subscription = this.tvSvcFind.searchedTvs$
      .subscribe( (tvsArr:TvFindVideoappModel[]) => {
        this.tvs = tvsArr;
    });
  }

  getImgFullUrl(urlFragment:string):string {
    // https://image.tmdb.org/t/p/w500/faXT8V80JRhnArTAeYXz0Eutpv9.jpg
    return 'https://image.tmdb.org/t/p/w500'+ urlFragment;
  }
  
  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.subscription.unsubscribe();
  }

  onClick(tv: TvFindVideoappModel){
    console.log(tv + " reçu par liste");
    this.dataSvc.setTvFind(tv);
  }
}
