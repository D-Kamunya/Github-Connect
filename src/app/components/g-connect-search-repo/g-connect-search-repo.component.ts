import { Component, OnInit } from '@angular/core';
import {GithubApiService} from '../../services/github-api/github-api.service'
import {Repo} from '../../classes/repo-class/repo'

@Component({
  selector: 'app-g-connect-search-repo',
  templateUrl: './g-connect-search-repo.component.html',
  styleUrls: ['./g-connect-search-repo.component.scss']
})
export class GConnectSearchRepoComponent implements OnInit {
  reponame:any
  repos:Repo
  errors:boolean=false
  searchName='Repository Name'

  constructor(private apiService:GithubApiService) { }

  ngOnInit(): void {
    // this.apiService.getRepos('Github-Connect')
    // .then((success)=>{
    //   this.repos = this.apiService.repos['items'];
    // },
    // (error)=>{
    //   console.log(error)
    // })
    
  }

  searchRepo(){
    this.repos=undefined
    this.apiService.getRepos(this.reponame)
    .then((success)=>{
      this.repos = this.apiService.repos['items'];
      if(Object.keys(this.repos).length===0){
        this.errors=true
      }
    },
    (error)=>{
      console.log(error)
      this.errors=true
    })

    this.reponame=""
    
  }

}
