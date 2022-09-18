import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieModel } from '../movies/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl: string = "http://localhost:3000/movies"; 
  constructor(private http: HttpClient) { }

  listMovies(page:number = 3, count: number = 5){
    debugger
    let httpMovieCall =this.http.get<MovieModel[]>(this.baseUrl, { params: { page: page, count: count } });
    console.log(httpMovieCall);
    return httpMovieCall;
  }
}
