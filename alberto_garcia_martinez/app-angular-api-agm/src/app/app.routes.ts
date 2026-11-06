import { Routes } from '@angular/router';
import { VehiclesListPage } from './pages/vehicles-list-page/vehicles-list-page';
import { FilmListPage } from './pages/film-list-page/film-list-page';
import { FilmItemPage } from './pages/film-item-page/film-item-page';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: 'vehicle-list', component: VehiclesListPage },
  { path: 'film-list', component: FilmListPage },
  { path: 'film-detail/:id', component: FilmItemPage },
  { path: '', redirectTo: '/vehicle-list', pathMatch: 'full' },
  { path: '**', component: NotFound },
];
