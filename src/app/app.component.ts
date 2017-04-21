import { Component } from '@angular/core';
import {MdInputModule} from '@angular/material';
import {SearchService} from './search.service';
import './rxjs-extensions';
import {Repository} from './repositoryObject'
import {MdListModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search_input = '';
  repositories = [];
  i:number;
  repository_item:object;
  repository:Repository;
  repositories_for_view: Repository[];
  constructor(private search_serive : SearchService){}

  search(value: string) 
  { 
    this.search_input = value;
    this.search_serive.getRepositoryInfo(this.search_input)
    .subscribe(repositories => this.repositories = repositories);

    console.log(this.repositories);

   }
}