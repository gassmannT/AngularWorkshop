import { SessionDetailComponent } from './sessions/session-detail/session-detail.component';
import { SessionListComponent } from './sessions/session-list/session-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SessionListComponent }, //default
  //TODO: Add a route to the edit page (SessionDetailComponent) and pass parameter (hint: :id)
  { path: '**', redirectTo: '/', pathMatch: 'full' } //not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }