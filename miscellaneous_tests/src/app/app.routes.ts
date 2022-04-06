import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { UserRoutes } from './components/user/user.routes';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'user/:test',
    component: UserComponent,
    children: UserRoutes,
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
