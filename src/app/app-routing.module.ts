import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ListMovieSingleTMDBComponent } from './list-movie-single-tmdb/list-movie-single-tmdb.component';
import { ListMovieMultiTmdbComponent } from './list-movie-multi-tmdb/list-movie-multi-tmdb.component';
import { ListTvSingleTmdbComponent } from './list-tv-single-tmdb/list-tv-single-tmdb.component';
import { ListTvMultiTmdbComponent } from './list-tv-multi-tmdb/list-tv-multi-tmdb.component';
import { ListMovieSingleVideoappComponent } from './list-movie-single-videoapp/list-movie-single-videoapp.component';
import { ListMovieMultiVideoappComponent } from './list-movie-multi-videoapp/list-movie-multi-videoapp.component';
import { ListTvSingleVideoappComponent } from './list-tv-single-videoapp/list-tv-single-videoapp.component';
import { ListTvMultiVideoappComponent } from './list-tv-multi-videoapp/list-tv-multi-videoapp.component';

const routes: Routes = [
  //localhost:4200
  {path:'', component: HomeComponent},

  //localhost:4200/list
  {path:'list', component: ListComponent},

  //localhost:4200/list-movie-single-tmdb/123
  {path:'list-movie-single-tmdb/:id', component: ListMovieSingleTMDBComponent},

  //localhost:4200/list-tv-single-tmdb/123
  {path:'list-tv-single-tmdb/:id', component: ListTvSingleTmdbComponent},

  //localhost:4200/list-movie-multi-tmdb
  {path:'list-movie-multi-tmdb', component: ListMovieMultiTmdbComponent},

  //localhost:4200/list-tv-multi-tmdb
  {path:'list-tv-multi-tmdb', component: ListTvMultiTmdbComponent},

  //localhost:4200/list-movie-single-videoapp
  {path:'list-movie-single-videoapp', component: ListMovieSingleVideoappComponent},

  //localhost:4200/list-movie-multi-videoapp
  {path:'list-movie-multi-videoapp', component: ListMovieMultiVideoappComponent},
  
  //localhost:4200/list-tv-single-videoapp
  {path:'list-tv-single-videoapp', component: ListTvSingleVideoappComponent},

  //localhost:4200/list-tv-multi-videoapp
  {path:'list-tv-multi-videoapp', component: ListTvMultiVideoappComponent},

  //localhost:4200/login => display LoginFormComponent
  {path:'login', component: LoginFormComponent},

  //localhost:4200/register => display RegisterFormComponent
  {path:'register', component: RegisterFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
