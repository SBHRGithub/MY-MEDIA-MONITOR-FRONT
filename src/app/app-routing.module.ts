import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ListMovieSingleTMDBComponent } from './list-movie-single-tmdb/list-movie-single-tmdb.component';
import { ListMovieMultiTmdbComponent } from './list-movie-multi-tmdb/list-movie-multi-tmdb.component';
import { ListTvSingleTmdbComponent } from './list-tv-single-tmdb/list-tv-single-tmdb.component';

const routes: Routes = [
  //localhost:4200 => display ListComponent
  {path:'', component: ListComponent},

  //localhost:4200 => display item on ListMovieSingleTMDBComponent
  {path:'list-movie-single-tmdb/:id', component: ListMovieSingleTMDBComponent},

  //localhost:4200 => display item on ListTvSingleTMDBComponent
  {path:'list-tv-single-tmdb/:id', component: ListTvSingleTmdbComponent},

  //localhost:4200 => display item on ListMovieMultiTMDBComponent
  {path:'list-movie-multi-tmdb', component: ListMovieMultiTmdbComponent},

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
