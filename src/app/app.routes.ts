import { Routes } from '@angular/router';
import { Home } from './doss-body/home/home';
import { About } from './doss-body/about/about';
import { Contact } from './doss-body/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact }
];
