import { Component, OnInit } from '@angular/core';
import {GithubApiService} from '../../services/github-api/github-api.service'
import {User} from '../../classes/user-class/user'
import {Repo} from '../../classes/repo-class/repo'

@Component({
  selector: 'app-g-connect-home',
  templateUrl: './g-connect-home.component.html',
  styleUrls: ['./g-connect-home.component.scss']
})
export class GConnectHomeComponent implements OnInit {
  user:User
  userrepos:Repo

  constructor(private apiService:GithubApiService) { }

  ngOnInit(): void {
    this.apiService.getUserProfile('d-kamunya').then((success)=>{
        this.user = this.apiService.user;
        console.log(this.user);
      },
      (error)=>{
        console.log(error)
      })

      this.apiService.getUserRepos('d-kamunya').then((success)=>{
        this.userrepos = this.apiService.repos;
        console.log(this.userrepos);
      },
      (error)=>{
        console.log(error)
      })

    
  }

}
