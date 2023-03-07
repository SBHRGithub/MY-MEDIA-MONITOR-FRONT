import { Component } from '@angular/core';
import { TvTmdbService } from '../services/tv-tmdb.service';
import { TVSearchTMDBModel } from '../shared/models/tv-search-tmdb.model';
import { DataTransferService } from '../services/data-transfer.service';

@Component({
  selector: 'app-searchbar-tv',
  templateUrl: './searchbar-tv.component.html',
  styleUrls: ['./searchbar-tv.component.css']
})
export class SearchbarTvComponent {

  public searchedTvs: TVSearchTMDBModel[]=[];
  public query!: string;

  constructor(
    private tvSvc: TvTmdbService,
    public dataTransfer: DataTransferService) {}

  ngOnInit() {
    this.tvSvc.getSearchedTvs$()
    .subscribe( (foundTvs:TVSearchTMDBModel[]) => this.searchedTvs = foundTvs);
  }

  onKeyupInput(userSearch:string) {
    
    this.query = userSearch;
    this.dataTransfer.setData(this.query);
    
    if(userSearch.length==0) {
      this.tvSvc.setSearchedTvs$([]);
    }
    else {
      if(userSearch.length>4){
      this.tvSvc.searchTvsFromApi(userSearch);
      }
    }
  }

  ngOnDestroy() {
    this.tvSvc.setSearchedTvs$([]);
  }
}
