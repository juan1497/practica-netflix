import { Component, Input, OnInit } from '@angular/core';
import { Films } from '../models/netflix-data';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  @Input() films!:Films;

  constructor() { }

  ngOnInit(): void {
  }

}
