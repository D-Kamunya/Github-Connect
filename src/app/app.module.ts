import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GConnectHomeComponent } from './components/g-connect-home/g-connect-home.component';
import { GConnectNavbarComponent } from './components/g-connect-navbar/g-connect-navbar.component';
import { GConnectSearchUserComponent } from './components/g-connect-search-user/g-connect-search-user.component';
import { GConnectSearchRepoComponent } from './components/g-connect-search-repo/g-connect-search-repo.component';

@NgModule({
  declarations: [
    AppComponent,
    GConnectHomeComponent,
    GConnectNavbarComponent,
    GConnectSearchUserComponent,
    GConnectSearchRepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
