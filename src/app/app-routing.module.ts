import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./domain/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./domain/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'not-found',
    loadChildren: () => import('./domain/not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
