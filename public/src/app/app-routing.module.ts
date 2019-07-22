import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/new', component: NewComponent },
  { path: 'products/edit/:id', component: EditComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
