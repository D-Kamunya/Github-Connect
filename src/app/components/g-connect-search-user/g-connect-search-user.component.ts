import { Component, OnInit } from '@angular/core';
import {GithubApiService} from '../../services/github-api/github-api.service'
import {User} from '../../classes/user-class/user'
import {Repo} from '../../classes/repo-class/repo'
import { Follower } from '../../classes/follower-class/follower';
import { Following } from '../../classes/following-class/following';

@Component({
  selector: 'app-g-connect-search-user',
  templateUrl: './g-connect-search-user.component.html',
  styleUrls: ['./g-connect-search-user.component.scss']
})
export class GConnectSearchUserComponent implements OnInit {

  username:any
  user:User
  userrepos:Repo
  userfollowers:Follower
  userfollowing:Following
  errors:boolean=false
  searchName='Username'

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
    this.userrepos=undefined
    this.apiService.getUserProfile(this.username).then((success)=>{
      this.user = this.apiService.user;
    },
    (error)=>{
      console.log(error)
      this.errors=true
    })

    this.apiService.getUserRepos(this.username).then((success)=>{
      this.userrepos = this.apiService.userrepos;
    },
    (error)=>{
      console.log(error)
    })

    this.apiService.getUserFollowers(this.username)
    .then((success)=>{
      this.userfollowers = this.apiService.userfollowers;
      console.log(this.userfollowers);
      
    },
    (error)=>{
      console.log(error)
    })


    this.apiService.getUserFollowing(this.username)
      .then((success)=>{
        this.userfollowing = this.apiService.userfollowing;
        console.log(this.userfollowing);
        
      },
      (error)=>{
        console.log(error)
      })
      this.username=""
  }
  

}
