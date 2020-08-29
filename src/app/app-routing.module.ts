import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GConnectHomeComponent } from './components/g-connect-home/g-connect-home.component';
import { GConnectSearchUserComponent } from './components/g-connect-search-user/g-connect-search-user.component';
import { GConnectSearchRepoComponent } from './components/g-connect-search-repo/g-connect-search-repo.component';

const routes: Routes = [
  {path:'',component:GConnectHomeComponent},
  {path:'search-user',component:GConnectSearchUserComponent},
  {path:'search-repo',component:GConnectSearchRepoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
