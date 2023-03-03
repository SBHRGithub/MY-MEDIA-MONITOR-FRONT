import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-follow-form',
  templateUrl: './follow-form.component.html',
  styleUrls: ['./follow-form.component.css']
})
export class FollowFormComponent {

 followForm!:FormGroup;
  isSubmitted:boolean = false;
  userData:any;

  constructor(
    private fb:FormBuilder, 
    public userSvc: UserService,
    private alertSvc: AlertService,
    private router:Router
    ) {}
  
  ngOnInit() {
    this.followForm = this.fb.group({
      title:[''],
      mediaType:[''],
      viewingStatus:[''],
      myScore:[''],
    });
}

onSubmit() {
  console.log(this.followForm.value);
}

}
