import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-card-form-movie',
  templateUrl: './card-form-movie.component.html',
  styleUrls: ['./card-form-movie.component.css']
})
export class CardFormMovieComponent {

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
    });
}

onSubmit() {
  console.log(this.cardForm.value);
}

}
