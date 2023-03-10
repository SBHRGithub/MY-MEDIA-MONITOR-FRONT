import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { DataTransferService } from '../services/data-transfer.service';
import { AlertService } from '../services/alert.service';
import { MovieVideoappUpdateService } from '../services/movie-videoapp-update.service';
import { MovieDetailsTMDBModel } from '../shared/models/movie-details-tmdb.model';


@Component({
  selector: 'app-card-form-movie',
  templateUrl: './card-form-movie.component.html',
  styleUrls: ['./card-form-movie.component.css']
})
export class CardFormMovieComponent {

  cardForm!:FormGroup;
  movie!: MovieDetailsTMDBModel;
  response: any;

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private alertSvc: AlertService,
    public dataSvc: DataTransferService,
    public movieVideoappUpdateSvc: MovieVideoappUpdateService,

    ) {}

  ngOnInit() {
    this.cardForm = this.fb.group({
      viewingStatus:[''],
      myScore:[''],
    });
}

  onSubmit() {
    console.log("Cardform value received by onSubmit()");
    console.log(this.cardForm.value);

    this.movie = this.dataSvc.getMovie();

    console.log("Movie received from DataTranferService");
    console.log(this.movie);

    this.movieVideoappUpdateSvc.update(this.movie,this.cardForm)
    .subscribe(
      {
        next: (response: any) => {
          console.log("Response from backend after updating movie");
          console.log(response);

          if((response.status=200)||(response.status=201)) {
            this.router.navigate(['/list']);
            this.alertSvc.showAlert('Movie registered');
          }
          else {
            this.alertSvc.showAlert('Error : movie not registered');
          }            
        },
        error: (err) => {
          this.alertSvc.showAlert('Error : movie not registered');
          console.log(err)
        }
      }
    )
  }
}
