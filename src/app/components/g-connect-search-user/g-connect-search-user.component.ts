import { Component, OnInit } from '@angular/core';
import {GithubApiService} from '../../services/github-api/github-api.service'
import {User} from '../../classes/user-class/user'
import {Repo} from '../../classes/repo-class/repo'

@Component({
  selector: 'app-g-connect-search-user',
  templateUrl: './g-connect-search-user.component.html',
  styleUrls: ['./g-connect-search-user.component.scss']
})
export class GConnectSearchUserComponent implements OnInit {

  username:any
  user:User
  userrepos:Repo
  constructor(private apiService:GithubApiService) { 
    this.user=new User(0,"","","","","","","","",0,0,0,new Date())
  }

  ngOnInit(): void {
    // this.apiService.getUserProfile('d-kamunya').then((success)=>{
    //   this.user = this.apiService.user;
    // },
    // (error)=>{
    //   console.log(error)
    // })

    // this.apiService.getUserRepos('d-kamunya').then((success)=>{
    //   this.userrepos = this.apiService.userrepos;
    // },
    // (error)=>{
    //   console.log(error)
    // })
  }

  searchUser(){
    this.apiService.getUserProfile(this.username).then((success)=>{
      this.user = this.apiService.user;
    },
    (error)=>{
      console.log(error)
    })

    this.apiService.getUserRepos(this.username).then((success)=>{
      this.userrepos = this.apiService.userrepos;
    },
    (error)=>{
      console.log(error)
    })
  }
  

}
