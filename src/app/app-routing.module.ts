import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { IndexComponent } from './index/index.component';

const routes :Routes = [
  {path:'',component: IndexComponent},
  {path:'index',component: IndexComponent},
  {path:'catalog', component: CatalogComponent},
  {path:'about',component: IndexComponent},
  {path:'contact',component: IndexComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


