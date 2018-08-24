import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { UserComponent } from './users/user/user.component'




@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    SingleNewsComponent,
    AddNewsComponent,
    UsersComponent,
    UserComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule

  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
