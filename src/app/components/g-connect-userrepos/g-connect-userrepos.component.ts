import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import {GithubApiService} from '../../services/github-api/github-api.service'
import {Repo} from '../../classes/repo-class/repo'

@Component({
  selector: 'app-g-connect-userrepos',
  templateUrl: './g-connect-userrepos.component.html',
  styleUrls: ['./g-connect-userrepos.component.scss']
})
export class GConnectUserreposComponent implements OnInit {

  username:string
  userrepos:Repo

  constructor(private route:ActivatedRoute,private apiService:GithubApiService) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username')
    this.apiService.getUserRepos(this.username).then((success)=>{
      this.userrepos = this.apiService.userrepos;
      console.log(this.userrepos);
      
    },
    (error)=>{
      console.log(error)
    })
  }

}
