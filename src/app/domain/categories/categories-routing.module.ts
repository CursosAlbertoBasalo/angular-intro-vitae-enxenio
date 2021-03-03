import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'new', loadChildren: () => import('./new/new.module').then((m) => m.NewModule) },
  { path: ':id', loadChildren: () => import('./view/view.module').then((m) => m.ViewModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}
