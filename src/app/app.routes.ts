import { Routes } from '@angular/router';
import { Home } from './doss-body/home/home';
import { About } from './doss-body/about/about';
import { Contact } from './doss-body/contact/contact';
import { PanierPage } from './doss-body/PanierPage/PanierPage';
import { ProductDetailComponent } from './doss-body/DetailProduit/product-detail';
import { Favorisliste } from './doss-body/favorisliste/favorisliste';


export const routes: Routes = [
{ path: 'home', component: Home },
{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'panierpage', component: PanierPage },
  { path: 'produit/:id', component: ProductDetailComponent } ,
  { path: 'favorisliste', component: Favorisliste },

];
