import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Component/about/about.component';
import { CreatebookComponent } from './Component/createbook/createbook.component';
import { EditbookComponent } from './Component/editbook/editbook.component';
import { SearchbookComponent } from './Component/searchbook/searchbook.component';

const routes: Routes = [{path:'create',component:CreatebookComponent}
,{path:'edit',component:EditbookComponent},{path:'search',component:SearchbookComponent}
,{path:'about',component:AboutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
