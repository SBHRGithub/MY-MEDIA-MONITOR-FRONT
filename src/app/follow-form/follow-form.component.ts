import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { MovieVideoappFindService } from '../services/movie-videoapp-find.service';
import { TvVideoappFindService } from '../services/tv-videoapp-find.service';
import { DataTransferService } from '../services/data-transfer.service';
import { MovieFindVideoappModel } from '../shared/models/movie-find-videoapp.model';
import { TvFindVideoappModel } from '../shared/models/tv-find-videoapp.model';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-follow-form',
  templateUrl: './follow-form.component.html',
  styleUrls: ['./follow-form.component.css']
})
export class FollowFormComponent {

  followForm!:FormGroup;

  constructor(
    private fb:FormBuilder,
    public movieSvcFind: MovieVideoappFindService,
    public tvSvcFind: TvVideoappFindService,
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
      this.dataSvc.setFollowForm(this.followForm);
      this.movieSvcFind.find(this.followForm);
      this.router.navigate(['/list-movie-multi-videoapp']);
    }

    if (this.followForm.value.mediaType == "tv"){
      this.dataSvc.setFollowForm(this.followForm);
      this.tvSvcFind.find(this.followForm);
      this.router.navigate(['/list-tv-multi-videoapp']);

    }   
  }
}

