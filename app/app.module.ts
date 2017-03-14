import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { SessionListComponent } from './components/session/list/sessionList.component';
import { SessionEditComponent } from './components/session/edit/session-edit.component';

import { SessionService } from './services/api/session.service';
import { DataService } from './services/data.service';
import { UrlService } from './services/api/url.service';

const routes: Routes = [
  { path: '', component: SessionListComponent },
  { path: 'session/edit/:id', component: SessionEditComponent },
  // { path: '**', redirectTo: '/', pathMatch: 'full' }
];


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    InMemoryWebApiModule.forRoot(DataService, { delay: 250 })
  ],
  declarations: [
    AppComponent,
    SessionListComponent,
    SessionEditComponent
  ],
  providers: [
    SessionService,
    UrlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
