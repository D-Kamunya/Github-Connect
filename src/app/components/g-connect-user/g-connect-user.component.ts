import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../../classes/user-class/user'
import {Repo} from '../../classes/repo-class/repo'
import { Follower } from 'src/app/classes/follower-class/follower';
import { Following } from '../../classes/following-class/following';

@Component({
  selector: 'app-g-connect-user',
  templateUrl: './g-connect-user.component.html',
  styleUrls: ['./g-connect-user.component.scss']
})
export class GConnectUserComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(Object.keys(this.repos).length>3){
      this.showBtn=true
    }
  }

  @Input () user:User
  @Input () repos:Repo
  @Input () followers:Follower
  @Input () followings:Following

  showBtn:boolean=false
  
  goToUrl(username){
    this.router.navigate(['/userrepos',username])
  }
}
