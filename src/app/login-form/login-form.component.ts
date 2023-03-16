import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  
  loginForm!:FormGroup;
  isSubmitted:boolean = false;
  userData:any;

  constructor(
    private fb:FormBuilder, 
    public userSvc: UserService,
    private alertSvc: AlertService,
    private router:Router
    ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email:['', [Validators.required, Validators.email] ],
      password:['', Validators.required],
    });

    let userDataInStorage = localStorage.getItem('userData');
    this.userData = userDataInStorage!=null?JSON.parse(userDataInStorage):{};    
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.userSvc.login(this.loginForm.value)
      .subscribe( 
        {
          next: (response:any) => {
            console.log( response);
  
            let userData = {
//xx              id: response.user.id,
//xx              token: response.jwt, 
//xx              email : response.user.email,
//xx              username : response.user.username,
              token: response.token,
              email: response.email
            };
            localStorage.setItem('token', response.token);
            localStorage.setItem('userData', JSON.stringify(userData));

            if(response.token) {
              this.router.navigate(['/list']);
              this.alertSvc.showAlert('You are connected');
            }
          },
          error: (err) => console.log(err)
      }
      )
    }
  }

  logoutAction() {
    this.userSvc.logout()
  }
  
}
