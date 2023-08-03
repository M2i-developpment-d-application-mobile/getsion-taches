import { Component, OnInit } from '@angular/core';
import { Tache } from '../tache.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TachesService } from '../taches.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list-taches',
  templateUrl: './list-taches.page.html',
  styleUrls: ['./list-taches.page.scss'],
})
export class ListTachesPage implements OnInit {

  loadedTache?: Tache;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: TachesService,
    private router: Router,
    private alertCtr: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('tacheId'))
      return;
      const tacheId = paramMap.get('tacheId');
      this.loadedTache = this.service.getTache(tacheId!);
    })
  }

  onDeleteTache() {
    this.alertCtr.create({
      header: 'Are you sur ?',
      message: 'Do you really want to delete the recipe ?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },{
        text: 'Delete',
        handler: () => {
          this.service.deleteTache(this.loadedTache?.id!);
          this.router.navigate(['/taches']);
        }
      }]
    }).then(alertEl => {
      alertEl.present();
    })
  }
}
