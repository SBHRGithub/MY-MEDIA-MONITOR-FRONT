import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  registerForm!:FormGroup;
  isSubmitted:boolean = false;
  userData:any;

  constructor(
    private fb:FormBuilder, 
    public userSvc: UserService,
    private alertSvc: AlertService,
    private router:Router
    ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      email:['', [Validators.required, Validators.email] ],
      password:['', Validators.required],
    });

    let userDataInStorage = localStorage.getItem('userData');
    this.userData = userDataInStorage!=null?JSON.parse(userDataInStorage):{};    
  }

  onSubmit() {
    if(this.registerForm.valid) {
      this.userSvc.register(this.registerForm.value)
      .subscribe( 
        {
          next: (response:any) => {
            console.log(response);

            if((response.status=200)||(response.status=201)) {
              this.router.navigate(['/login']);
              this.alertSvc.showAlert('You are registered');
            }
          },
          error: (err) => console.log(err)
      }
      )
    }
  }
}

