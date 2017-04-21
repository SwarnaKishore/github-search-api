import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import './rxjs-extensions';
import {Repository} from './repositoryObject'

@Injectable()

export class SearchService{
     constructor(private http: Http) { }
     private baseSearchURL : string = 'https://api.github.com/search/repositories?sort=stars&order=desc&per_page=10';
     url:string;

  
  i:number;
  repository:Repository;
  repositories_for_view: Repository[];

     getRepositoryInfo(search_input:string) : Observable<any>{
          
        if(search_input !== "")
             {
                this.url = this.baseSearchURL + '&q='+ search_input;
        	 }
              return this.http.get(this.url)
               .map(this.extractData)
               .catch(error => Observable.throw(error.statusText));
                 
     }
    
    private extractData(res: Response) {
    let body = res.json();

     for(this.i = 0; this.i < body.items.length; this.i++)
            {
                
                this.repository.forks_count = body.items[this.i].forks_count;
                this.repository.html_url = body.items[this.i].html_url;
                this.repository.language = body.items[this.i].language;
                this.repository.owner_avatar_url = body.items[this.i].owner.avatar_url;
                this.repository.owner_profile_url = body.items[this.i].owner.html_url;
                this.repository.repository_name = body.items[this.i].name;
                this.repository.stars_count = body.items[this.i].stargazers_count;
                this.repository.updated_at = body.items[this.i].updated_at;

               console.log(this.repositories_for_view.push(this.repository));
               
            }
    console.log(body.items[0].stargazers_count);
    return body.items;
  }

}
