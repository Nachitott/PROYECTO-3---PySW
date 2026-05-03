import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Punto1 } from './components/punto1/punto1';
import { Punto3Component } from './components/punto3/punto3';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'punto1', component: Punto1 },
  // path punto 2 (cuando lo tengan listo)
  { path: 'punto3', component: Punto3Component },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirección inicial por defecto
  { path: '**', redirectTo: 'home', pathMatch: 'full' }, // Ruta comodín de seguridad[cite: 3]
];