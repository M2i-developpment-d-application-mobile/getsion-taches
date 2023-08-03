import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TachesPageRoutingModule } from './taches-routing.module';

import { TachesPage } from './taches.page';
import { ItemTacheComponent } from './item-tache/item-tache.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TachesPageRoutingModule
  ],
  declarations: [TachesPage,ItemTacheComponent]
})
export class TachesPageModule {}
