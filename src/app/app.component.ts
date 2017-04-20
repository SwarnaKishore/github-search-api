import { Component } from '@angular/core';
import {MdInputModule} from '@angular/material';
import {SearchService} from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search_input = '';
  repositories ={};
  constructor(private search_serive : SearchService){}

  search(value: string) 
  { 
    this.search_input = value;
    this.search_serive.getRepositoryInfo(this.search_input)
    .then(repositories => this.repositories = repositories,
    error => console.log(error));
    console.log(this.repositories);
  }
}
