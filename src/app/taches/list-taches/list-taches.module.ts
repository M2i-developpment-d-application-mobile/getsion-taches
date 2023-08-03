import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListTachesPageRoutingModule } from './list-taches-routing.module';

import { ListTachesPage } from './list-taches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListTachesPageRoutingModule
  ],
  declarations: [ListTachesPage]
})
export class ListTachesPageModule {}
