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

  listMovies: Observable<MovieModel[]>;
  constructor(private movieService:MovieService) { }

  async ngOnInit(): Promise<void> {
    this.listMovies = await this.movieService.listMovies();
  }

}
