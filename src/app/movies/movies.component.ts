import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MovieService } from '../services/movie.service';
import { MovieModel } from './movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  comment = new FormControl('',);

  listMovies: MovieModel[];
  constructor(private movieService:MovieService) { }
  
  async ngOnInit(): Promise<void> {
    this.movieService.listMovies().subscribe((result:MovieModel[])=>{
      this.listMovies = result
      console.log("Result",this.listMovies);
    });
  }
}
