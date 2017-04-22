import { Component } from '@angular/core';
import {SearchService} from './search.service';
import './rxjs-extensions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search_input = '';
  repositories = [];
 
  constructor(private search_serive : SearchService){}

  search(value: string) 
  { 
    this.search_input = value;
    this.search_serive.getRepositoryInfo(this.search_input)
    .subscribe(repositories => this.repositories = repositories);

    console.log(this.repositories);

   }
}