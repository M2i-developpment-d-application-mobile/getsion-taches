import { Injectable } from '@angular/core';
import { Tache } from './tache.model';

@Injectable({
  providedIn: 'root'
})
export class TachesService {
  taches : Tache[] = [
    {

      id: '1',
      image:'https://media.istockphoto.com/id/1352766190/fr/vectoriel/femme-accro-du-shopping-qui-court-avec-un-panier-vide.jpg?s=612x612&w=0&k=20&c=NF7DCYzWVLePDeAs6M03do4PTp_4-S_MgV1EYVl5FuE=',
      titre: 'Faire Des Courses',
      description: 'test',
      lieux:['Carrfour','Lecler','Grand frais'],
      prioty:'high',
      expiration:'10-07-2023',
    },
    {
      id: '2',
      image:'https://st.depositphotos.com/2319941/2586/i/450/depositphotos_25865983-stock-photo-mother-and-son.jpg',
      titre: 'Ammner les enfants a l\'ecole',
      description: 'test',
      lieux:['Mi plaine'],
      prioty:'high',
      expiration:'10-07-2023',
    },
    {
      id: '3',
      image:'https://www.deco.fr/sites/default/files/styles/full_1200x630/public/2020-07/shutterstock_1155286738.jpg?itok=JWYCz3Vf',
      titre: 'Faire Le Menage',
      description: 'test',
      lieux:['Salle de bain','Cuisine','Salle de séjour'],
      prioty:'medium',
      expiration:'10-07-2023',
    },
  ]

  getAllTaches() {
    return this.taches;
  }

  getTache(recipeId: string){
    return this.taches.find(recipe => {
      return recipe.id === recipeId
    })
  }
  deleteTache(recipeId: string){
    this.taches = this.taches.filter(recipe => {
      return recipe.id !== recipeId;
    })
  }
  constructor() { }
}
