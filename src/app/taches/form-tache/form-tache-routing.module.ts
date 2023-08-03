import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormTachePage } from './form-tache.page';

const routes: Routes = [
  {
    path: '',
    component: FormTachePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormTachePageRoutingModule {}
