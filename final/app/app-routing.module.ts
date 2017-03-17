import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SessionsComponent } from "./sessions/sessions.component";
import { SessionComponent } from "./sessions/session/session.component";

const routes: Routes = [
  { path: '', component: SessionsComponent },
  { path: 'session/edit/:id', component: SessionComponent },
  // { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }