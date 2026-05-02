import { Routes } from '@angular/router';
import { Punto1 } from './components/punto1/punto1';
import { Home } from './components/home/home';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'punto1', component: Punto1},
//path punto 2
//path punto 3
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];
