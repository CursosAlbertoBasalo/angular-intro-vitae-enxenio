import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items.component';
import { NewGuard } from './new/new.guard';

const routes: Routes = [
  { path: '', component: ItemsComponent },
  {
    path: 'new',
    canLoad: [NewGuard],
    loadChildren: () => import('./new/new.module').then((m) => m.NewModule),
  },
  { path: ':id', loadChildren: () => import('./view/view.module').then((m) => m.ViewModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsRoutingModule {}
