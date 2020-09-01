import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {HttpClientModule} from '@angular/common/http'
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GConnectHomeComponent } from './components/g-connect-home/g-connect-home.component';
import { GConnectNavbarComponent } from './components/g-connect-navbar/g-connect-navbar.component';
import { GConnectSearchUserComponent } from './components/g-connect-search-user/g-connect-search-user.component';
import { GConnectSearchRepoComponent } from './components/g-connect-search-repo/g-connect-search-repo.component';
import { GConnectUserComponent } from './components/g-connect-user/g-connect-user.component';
import { FormsModule } from '@angular/forms';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { FocusRepoDirective } from './directives/focus-repo.directive';
import { ErrorComponent } from './components/error/error.component';
import { GConnectUserreposComponent } from './components/g-connect-userrepos/g-connect-userrepos.component';

@NgModule({
  declarations: [
    AppComponent,
    GConnectHomeComponent,
    GConnectNavbarComponent,
    GConnectSearchUserComponent,
    GConnectSearchRepoComponent,
    GConnectUserComponent,
    TimeAgoPipe,
    FocusRepoDirective,
    ErrorComponent,
    GConnectUserreposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
