import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [{
  path: 'login', component: LoginComponent 
},{
  path: 'signup', component: SignUpComponent
},{
  path: 'movies', component: MoviesComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
