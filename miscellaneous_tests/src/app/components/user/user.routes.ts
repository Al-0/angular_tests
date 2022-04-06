import { Routes } from '@angular/router';
import { NewUserComponent } from './new-user.component';
import { EditUserComponent } from './edit-user.component';
import { DetailUserComponent } from './detail-user.component';

export const UserRoutes: Routes = [
  { path: 'new', component: NewUserComponent },
  { path: 'edit/:id', component: EditUserComponent },
  { path: 'detail', component: DetailUserComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'new' },
];
