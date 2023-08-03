import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TachesPage } from './taches.page';

const routes: Routes = [
  {
    path: '',
    component: TachesPage
  },

  {
    path: ':tacheId',
    loadChildren: () => import('./list-taches/list-taches.module').then( m => m.ListTachesPageModule)
  },
  {
    path: 'form-tache',
    loadChildren: () => import('./form-tache/form-tache.module').then( m => m.FormTachePageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TachesPageRoutingModule {}
