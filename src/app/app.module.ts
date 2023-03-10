import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { ListMovieSingleTMDBComponent} from './list-movie-single-tmdb/list-movie-single-tmdb.component';
import { ListTvSingleTmdbComponent } from './list-tv-single-tmdb/list-tv-single-tmdb.component';
import { ListMovieMultiTmdbComponent } from './list-movie-multi-tmdb/list-movie-multi-tmdb.component';
import { ListTvMultiTmdbComponent } from './list-tv-multi-tmdb/list-tv-multi-tmdb.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FollowFormComponent } from './follow-form/follow-form.component';
import { SearchbarMovieComponent } from './searchbar-movie/searchbar-movie.component';
import { SearchbarTvComponent } from './searchbar-tv/searchbar-tv.component';
import { CardFormMovieComponent } from './card-form-movie/card-form-movie.component';
import { CardFormTvComponent } from './card-form-tv/card-form-tv.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { HomeComponent } from './home/home.component';
import { ListMovieSingleVideoappComponent } from './list-movie-single-videoapp/list-movie-single-videoapp.component';
import { ListMovieMultiVideoappComponent } from './list-movie-multi-videoapp/list-movie-multi-videoapp.component';
import { ListTvSingleVideoappComponent } from './list-tv-single-videoapp/list-tv-single-videoapp.component';
import { ListTvMultiVideoappComponent } from './list-tv-multi-videoapp/list-tv-multi-videoapp.component';

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
    SearchbarMovieComponent,
    SearchbarTvComponent,
    CardFormTvComponent,
    ListMovieSingleTMDBComponent,
    ListTvSingleTmdbComponent,
    CardFormMovieComponent,
    ListMovieMultiTmdbComponent,
    ListTvMultiTmdbComponent,
    HomeComponent,
    ListMovieSingleVideoappComponent,
    ListMovieMultiVideoappComponent,
    ListTvSingleVideoappComponent,    
    ListTvMultiVideoappComponent,

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
