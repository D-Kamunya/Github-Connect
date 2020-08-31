import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from '../../classes/user-class/user'
import {Repo} from '../../classes/repo-class/repo'
import {environment} from '../../../environments/environment'
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  user:User
  repos:Repo

  constructor(private http:HttpClient) { }

  //Fn to get github userprofile data
  getUserProfile(username){
    let url=`https://api.github.com/users/${username}?access_token=${environment.github_token}`


    interface Responce {
      id:number
      name:string
      html_url:string
      avatar_url:string;
      login: string;
      company:string
      blog:string
      location:string
      bio:string
      public_repos:number;
      followers:number;
      following:number;
      created_at:Date;
    }

    return new Promise((resolve, reject) => {
      this.http.get<Responce>(url).toPromise().then((result) => {
          this.user = result;
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
    
 
  }


}
