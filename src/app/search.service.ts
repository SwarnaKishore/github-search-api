import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import './rxjs-extensions';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class SearchService{
     constructor(private http: HttpClient) { }
     private baseSearchURL : string = 'https://api.github.com/search/repositories?sort=stars&order=desc&per_page=20';
     url:string;

  
  i:number;

     getRepositoryInfo(search_input:string) : Observable<any>{
          
        if(search_input == null)
            search_input = "angular";
        if(search_input)
             {
                this.url = this.baseSearchURL + '&q='+ search_input;
        	   }
              return this.http.get(this.url);
                 
     }
}
