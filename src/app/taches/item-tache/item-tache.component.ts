import { Component, Input, OnInit } from '@angular/core';
import { Tache } from '../tache.model';

@Component({
  selector: 'app-item-tache',
  templateUrl: './item-tache.component.html',
  styleUrls: ['./item-tache.component.scss'],
})
export class ItemTacheComponent  implements OnInit {
  @Input() tacheItem?: Tache
  constructor() { }

  ngOnInit() {}

}
