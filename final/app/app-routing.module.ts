import { SessionDetailComponent } from './sessions/session-detail/session-detail.component';
import { SessionListComponent } from './sessions/session-list/session-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SessionListComponent },
  { path: 'edit/:id', component: SessionDetailComponent },
  // { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }