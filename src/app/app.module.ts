import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FollowFormComponent } from './follow-form/follow-form.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CardFormComponent } from './card-form/card-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';

/* Material import for alert message*/
import {MatSnackBarModule} from '@angular/material/snack-bar';

/* Material imports for FollowFormComponent Input and Select fields*/
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

/* Material imports for FollowFormComponent Button*/
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginFormComponent,
    RegisterFormComponent,
    FollowFormComponent,
    SearchbarComponent,
    CardFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    /* Material imports for FollowFormComponent */
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
