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

  constructor(private apiService:GithubApiService) { }

  ngOnInit(): void {
  }

  searchRepo(){
    this.apiService.getRepos(this.reponame)
    .then((success)=>{
      this.repos = this.apiService.repos['items'];
    },
    (error)=>{
      console.log(error)
    })
    
  }

}
