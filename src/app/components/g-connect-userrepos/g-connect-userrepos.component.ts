import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-g-connect-userrepos',
  templateUrl: './g-connect-userrepos.component.html',
  styleUrls: ['./g-connect-userrepos.component.scss']
})
export class GConnectUserreposComponent implements OnInit {

  username:string
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username');
  }

}
