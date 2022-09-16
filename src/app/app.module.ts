import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatebookComponent } from './Component/createbook/createbook.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './Component/header/header.component';
import { Header1Component } from './Component/header1/header1.component';
import { EditbookComponent } from './Component/editbook/editbook.component';
import { SearchbookComponent } from './Component/searchbook/searchbook.component';
import { AboutComponent } from './Component/about/about.component';
import { CreateAccountComponent } from './Component/create-account/create-account.component';
import { LogInComponent } from './Component/log-in/log-in.component';
import { AuthorComponent } from './Component/author/author.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { AllBooksComponent } from './Component/all-books/all-books.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatebookComponent,
    HeaderComponent,
    Header1Component,
    EditbookComponent,
    SearchbookComponent,
    AboutComponent,
    CreateAccountComponent,
    LogInComponent,
    AuthorComponent,
    DashboardComponent,
    AllBooksComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
