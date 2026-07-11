import { Routes } from '@angular/router';

enum RouteNames {
  LANDING = '',
  LINK = 'links',
  CONTACTS = 'contacts',
  TAGS = 'tags',
  FAVORITES = 'favorites',
  VISITS = 'visits'
}
export const routes: Routes = [
  {
    path: RouteNames.LANDING,
    loadComponent: () => import('./pages/landing/landing').then(c => c.Landing)
  },
  {
    path: RouteNames.LINK,
    loadComponent: () => import('./pages/links/links').then(c => c.Links)
  },
  {
    path: RouteNames.CONTACTS,
    loadComponent: () => import('./pages/contacts/contacts').then(c => c.Contacts)
  },
  {
    path: RouteNames.TAGS,
    loadComponent: () => import('./pages/tags/tags').then(c => c.Tags)
  },
  {
    path: RouteNames.FAVORITES,
    loadComponent: () => import('./pages/favorites/favorites').then(c => c.Favorites)
  },
  {
    path: RouteNames.VISITS,
    loadComponent: () => import('./pages/visits/visits').then(c => c.Visits)
  },
  {
    path: '**',
    redirectTo: RouteNames.LANDING
  }
];
