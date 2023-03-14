import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { MovieVideoappFindService } from '../services/movie-videoapp-find.service';
import { TvVideoappFindService } from '../services/tv-videoapp-find.service';
import { AlertService } from '../services/alert.service';
import { DataTransferService } from '../services/data-transfer.service';
import { UserService } from '../services/user.service';
import { MovieFindVideoappModel } from '../shared/models/movie-find-videoapp.model';
import { TvFindVideoappModel } from '../shared/models/tv-find-videoapp.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-follow-form',
  templateUrl: './follow-form.component.html',
  styleUrls: ['./follow-form.component.css']
})
export class FollowFormComponent {

  followForm!:FormGroup;
 
  searchedTvs!:TvFindVideoappModel[];
  searchedMovies!:MovieFindVideoappModel[];
  moviesFindVideoappModel!: MovieFindVideoappModel[];
  tvsFindVideoappModel!: TvFindVideoappModel[];

  constructor(
    private fb:FormBuilder,
    public movieVideoappFindSvc: MovieVideoappFindService,
    public tvVideoappFindSvc: TvVideoappFindService,
    public alertSvc: AlertService,
    public dataSvc: DataTransferService,
    public userSvc: UserService,
    public router:Router
    ) {}
  
  ngOnInit() {

    this.followForm = this.fb.group({
      title:[''],
      mediaType:['movie'],
      viewingStatus:[''],
      myScore:[''],
    });
  }

  onSubmit() {

    if (this.followForm.value.mediaType == "movie"){
      this.movieVideoappFindSvc.find(this.followForm);
    }

    if (this.followForm.value.mediaType == "tv"){
      this.tvVideoappFindSvc.find(this.followForm);
    }   
  }
}
