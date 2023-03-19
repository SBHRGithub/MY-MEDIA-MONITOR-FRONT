import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginModel } from '../shared/models/userlogin.model';
import { UserRegisterModel } from '../shared/models/userregister.model';
import { AlertService } from './alert.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  environmenT = environment;

  API_USER:string = 'https://api-user-server.herokuapp.com/api';

  constructor(
    private http:HttpClient, 
    private alertSvc:AlertService,
    private router:Router
    ) {}

    register(credentials: UserRegisterModel ) {
      let userData = {
//iam node.js        identifier:credentials.email,
        email:credentials.email,
        password: credentials.password 
      };
      return this.http.post(this.environmenT.API_IAM_ENDPOINT_REGISTER, userData); // Observable
    }

    login(credentials: UserLoginModel ) {
      let userData = {
        email:credentials.email,
//iam node.js        identifier:credentials.email, 
        password: credentials.password 
      };

//iam node.js     return this.http.post(this.API_USER+'/auth/local', userData);
      return this.http.post(this.environmenT.API_IAM_ENDPOINT_LOGIN, userData)

    }

    logout() {
      localStorage.removeItem('token');
      this.alertSvc.showAlert('You are disconnect');
      this.router.navigate(['/']);
    }

    isAuth():boolean {
      let token = localStorage.getItem('token');
      if(token!=null && token.length>100 ) {
        return true;
      }
      return false;
    }

}
