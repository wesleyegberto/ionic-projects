import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  constructor(private http: Http) {
  }

  getRepositories(username) {
    return this.http.get(`https://api.github.com/users/${username}/repos`);
  }

  getDetails(repo) {  
    let headers = new Headers();
    headers.append('Accept','application/vnd.github.VERSION.html');
    return this.http.get(`${repo.url}/readme`, { headers: headers });
  }
}
