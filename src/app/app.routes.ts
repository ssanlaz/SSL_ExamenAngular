import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';

export const routes: Routes = [
    //meter aqui las rutas

    {path:'home',pathMatch:"full",redirectTo:"home"},
    {path:'home',component: ProductListComponent },
   {path:'producto/:_id', component: ProductViewComponent},
   {path:'**',redirectTo: "home"}


];
