import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {
  
  cardForm!:FormGroup;
  isSubmitted:boolean = false;
  userData:any;

  constructor(
    private fb:FormBuilder, 
    public userSvc: UserService,
    private alertSvc: AlertService,
    private router:Router
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
