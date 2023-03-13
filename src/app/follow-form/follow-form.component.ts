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
    console.log("Followform value received by onSubmit()");  
    console.log(this.followForm.value);

    if (this.followForm.value.mediaType == "movie"){
      console.log("movie detected from follow-form");
      this.movieVideoappFindSvc.find(this.followForm)
      .subscribe(
        {
          next: (response:any) => {
              console.log(response);
              if (this.searchedMovies.length == 0){
                this.alertSvc.showAlert("Your movie request has no answer");
              }
              else{
                this.dataSvc.setMoviesFindVideoappModel(this.searchedMovies);
                this.router.navigate(['/list-movie-multi-videoapp']);
              }          
            }
        }        
      )
    }

    if (this.followForm.value.mediaType == "tv"){
      console.log("tv detected from follow-form");
      this.tvVideoappFindSvc.find(this.followForm)
      .subscribe(
        {
          next: (response:any) => {           
            console.log("http.get response");
            console.log(response);

            console.log("http.get response status");
            console.log(response.status);

            this.searchedTvs = response;
            this.dataSvc.getTvsFindVideoappModel();

            console.log("searchedTvs");
            console.log(this.searchedTvs);

            if (this.searchedTvs.length == 0){
              this.alertSvc.showAlert("Your tv request has no answer");
            }
            else{
              console.log("Navigate to list-tv-multi-videoapp to come");
              this.router.navigate(['/list-tv-multi-videoapp']);
            }
          }
        }        
      )
    }   
  }
}
