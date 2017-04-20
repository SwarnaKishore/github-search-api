import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class SearchService{
     constructor(private http: Http) { }
     private baseSearchURL : string = 'https://api.github.com/search/repositories?sort=stars&order=desc&per_page=10';
     url:string;
     getRepositoryInfo(search_input:string) : Promise<any>{
          
        if(search_input !== "")
             {
                this.url = this.baseSearchURL + '&q='+ search_input;
        	 }
              return this.http.get(this.url)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
                 
     }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
