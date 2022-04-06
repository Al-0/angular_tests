import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { ClassesComponent } from './components/classes/classes.component';
import { HighlightDirective } from './directives/highlight.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { NewUserComponent } from './components/user/new-user.component';
import { EditUserComponent } from './components/user/edit-user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailUserComponent } from './components/user/detail-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ClassesComponent,
    HighlightDirective,
    NgSwitchComponent,
    HomeComponent,
    UserComponent,
    NewUserComponent,
    EditUserComponent,
    NavbarComponent,
    DetailUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
