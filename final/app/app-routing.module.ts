import { SessionComponent } from './sessions/session/session.component';
import { SessionsComponent } from './sessions/sessions.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SessionsComponent },
  { path: 'edit/:id', component: SessionComponent },
  // { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }