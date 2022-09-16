import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Component/about/about.component';
import { AllBooksComponent } from './Component/all-books/all-books.component';
import { CreateAccountComponent } from './Component/create-account/create-account.component';
import { CreatebookComponent } from './Component/createbook/createbook.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { EditbookComponent } from './Component/editbook/editbook.component';
import { LogInComponent } from './Component/log-in/log-in.component';
import { SearchbookComponent } from './Component/searchbook/searchbook.component';

const routes: Routes = [{path:'create',component:CreatebookComponent}
,{path:'edit',component:EditbookComponent},{path:'search',component:SearchbookComponent}
,{path:'about',component:AboutComponent},{path:'account',component:CreateAccountComponent},
{path:'login',component:LogInComponent},{path:'dashboard',component:DashboardComponent},
{path:'getallbooks',component:AllBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
