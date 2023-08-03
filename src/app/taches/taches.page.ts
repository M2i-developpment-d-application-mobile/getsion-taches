import { Component, OnInit } from '@angular/core';
import { TachesService } from './taches.service';
import { Tache } from './tache.model';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.page.html',
  styleUrls: ['./taches.page.scss'],
})
export class TachesPage implements OnInit {

  taches: Tache[] = [];


  constructor(private service: TachesService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.taches = this.service.getAllTaches();
  }

}
