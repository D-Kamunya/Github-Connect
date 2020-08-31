import { Component, Input, OnInit } from '@angular/core';
import {User} from '../../classes/user-class/user'
import {Repo} from '../../classes/repo-class/repo'

@Component({
  selector: 'app-g-connect-user',
  templateUrl: './g-connect-user.component.html',
  styleUrls: ['./g-connect-user.component.scss']
})
export class GConnectUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input () user:User
  @Input () repos:Repo

}
