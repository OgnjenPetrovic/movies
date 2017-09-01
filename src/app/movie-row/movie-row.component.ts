import { Component, OnInit , Input} from '@angular/core';
import { Movies } from '../shared/models/movie.model';

@Component({
  selector: '[movieRow]',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.css']
})


export class MovieRowComponent implements OnInit {

  @Input() movieRow: Movies;

  constructor() { }

  ngOnInit() {
  }

}

