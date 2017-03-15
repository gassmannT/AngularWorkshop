import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { SessionsComponent } from "./sessions/sessions.component";
import { SessionComponent } from "./sessions/session/session.component";
import { DataService } from "./shared/data.service";
import { SessionService } from "./sessions/shared/session.service";

const routes: Routes = [
  { path: '', component: SessionsComponent },
  { path: 'session/edit/:id', component: SessionComponent },
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
    SessionsComponent,
    SessionComponent
  ],
  providers: [
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
