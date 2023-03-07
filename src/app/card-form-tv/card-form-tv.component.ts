import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-card-form-tv',
  templateUrl: './card-form-tv.component.html',
  styleUrls: ['./card-form-tv.component.css']
})
export class CardFormTvComponent {
  
  cardForm!:FormGroup;
  isSubmitted:boolean = false;
  userData:any;

  constructor(
    private fb:FormBuilder, 
    public userSvc: UserService,
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
  console.log(this.cardForm.value);
}

}
