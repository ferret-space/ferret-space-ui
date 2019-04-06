import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppAuthGuard} from "./app-auth-guard";
import {AdminAreaComponent} from "./admin/admin-area/admin-area.component";
import {TrackListComponent} from "./track/track-list/track-list.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/track',
    pathMatch: 'full'
  },
  {
    path: 'track',
    component: TrackListComponent,
    canActivate: [AppAuthGuard]
  },
  {
    path: 'admin',
    component: AdminAreaComponent,
    canActivate: [AppAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppAuthGuard]
})
export class AppRoutingModule { }
