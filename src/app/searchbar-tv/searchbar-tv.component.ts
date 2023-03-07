import { Component } from '@angular/core';
import { TvTmdbService } from '../services/tv-tmdb.service';
import { TVSearchTMDBModel } from '../shared/models/tv-search-tmdb.model';

@Component({
  selector: 'app-searchbar-tv',
  templateUrl: './searchbar-tv.component.html',
  styleUrls: ['./searchbar-tv.component.css']
})
export class SearchbarTvComponent {

  public searchedTvs: TVSearchTMDBModel[]=[];

  constructor(private tvSvc: TvTmdbService) {}

  ngOnInit() {
    this.tvSvc.getSearchedTvs$()
    .subscribe( (foundTvs:TVSearchTMDBModel[]) => this.searchedTvs = foundTvs);
  }

  onKeyupInput(userSearch:string) {
    console.log(userSearch);
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
