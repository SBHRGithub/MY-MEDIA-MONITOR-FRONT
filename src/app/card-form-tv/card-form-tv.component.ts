import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { DataTransferService } from '../services/data-transfer.service';
import { AlertService } from '../services/alert.service';
import { TvVideoappUpdateService } from '../services/tv-videoapp-update.service';
import { TVDetailsTMDBModel } from '../shared/models/tv-details-tmdb.model';

@Component({
  selector: 'app-card-form-tv',
  templateUrl: './card-form-tv.component.html',
  styleUrls: ['./card-form-tv.component.css']
})
export class CardFormTvComponent {
  
  cardForm!:FormGroup;
  tv!: TVDetailsTMDBModel;
  response: any;

  constructor(
    private fb:FormBuilder,
    private router:Router, 
    public dataSvc: DataTransferService,
    public tvVideoappUpdateSvc: TvVideoappUpdateService,
    private alertSvc: AlertService
    ) {}

  ngOnInit() {
    this.cardForm = this.fb.group({
      viewingStatus:[''],
      myScore:[''],
      ongoingSeason:[''],
      ongoingEpisode:[''],
    });
}

  onSubmit() {
    console.log("Cardform value received by onSubmit()");
    console.log(this.cardForm.value);

    this.tv = this.dataSvc.getTv();

    console.log("Tv received from DataTranferService");
    console.log(this.tv);

    this.tvVideoappUpdateSvc.update(this.tv,this.cardForm)
    .subscribe(
      {
        next: (response: any) => {
          console.log("Response from backend after updating movie");
          console.log(response);

          if((response.status=200)||(response.status=201)) {
            this.router.navigate(['/list']);
            this.alertSvc.showAlert('TV Show registered');
          }
          else {
            this.alertSvc.showAlert('Error : TV Show not registered');
          }            
        },
        error: (err) => {
          this.alertSvc.showAlert('Error : TV Show not registered');
          console.log(err)
        }
      }
    )
  }
}
