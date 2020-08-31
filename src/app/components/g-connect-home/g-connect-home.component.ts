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

  constructor(private apiService:GithubApiService) { 
    this.user=new User(0,"","","","","","","","",0,0,0,new Date())
    // this.userrepos=new Repo(0,"","","","","","","","",0,0,0,new Date())
  }

  ngOnInit(): void {
    this.apiService.getUserProfile('d-kamunya').then((success)=>{
        this.user = this.apiService.user;
      },
      (error)=>{
        console.log(error)
      })

      this.apiService.getUserRepos('d-kamunya').then((success)=>{
        this.userrepos = this.apiService.repos;
      },
      (error)=>{
        console.log(error)
      })

    
  }

}
