import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormTachePageRoutingModule } from './form-tache-routing.module';

import { FormTachePage } from './form-tache.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormTachePageRoutingModule
  ],
  declarations: [FormTachePage]
})
export class FormTachePageModule {}
