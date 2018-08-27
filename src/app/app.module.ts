import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { SingleNewsComponent } from './news/single-news/single-news.component';
import { AddNewsComponent } from './news/add-news/add-news.component';

import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { NewsService } from './services/news.service';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ProfileCardComponent } from './users/profile-card/profile-card.component';
import {Routes, RouterModule} from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  { path:'', component:UsersComponent },
  { path:'users', component:UsersComponent },
  { path:'news', component:NewsComponent },
  { path:'users/user/:id', component:UserComponent },
  { path:'admin', component:AdminComponent }
]




@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    SingleNewsComponent,
    AddNewsComponent,
    UsersComponent,
    UserComponent,
    ProfileCardComponent,
    AdminComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features

  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
