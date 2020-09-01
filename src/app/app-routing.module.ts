import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GConnectHomeComponent } from './components/g-connect-home/g-connect-home.component';
import { GConnectSearchUserComponent } from './components/g-connect-search-user/g-connect-search-user.component';
import { GConnectSearchRepoComponent } from './components/g-connect-search-repo/g-connect-search-repo.component';
import {GConnectUserreposComponent} from './components/g-connect-userrepos/g-connect-userrepos.component'
const routes: Routes = [
  {path:'',component:GConnectHomeComponent},
  {path:'search-user',component:GConnectSearchUserComponent},
  { path: 'userrepos/:username', component: GConnectUserreposComponent },
  {path:'search-repo',component:GConnectSearchRepoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
