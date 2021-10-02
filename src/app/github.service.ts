import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { repos } from './repos';
import {environment} from '../environments/environment';
@Injectable()



export class GithubService {

  // tslint:disable-next-line:no-inferrable-types
  baseURL: string = 'https://api.github.com';
  constructor(private http: HttpClient) {
  }

  getRepos(userName: string): Observable<repos[]> {
       return this.http.get<repos[]>(this.baseURL + '/users/' + userName + '/repos');
  }
}
