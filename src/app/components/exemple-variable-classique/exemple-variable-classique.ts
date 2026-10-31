import { Component } from '@angular/core';

@Component({
  selector: 'app-exemple-variable-classique',
  imports: [],
  templateUrl: './exemple-variable-classique.html',
  styleUrl: './exemple-variable-classique.css',
})
export class ExempleVariableClassique {
  prixUnitaire: number = 5000;
  quantite:number=2;
  augmenterQuantite():void{
    this.quantite++;
  }
  diminuerQuantite():void{
    this.quantite--;
  }
  calculerTotal():number{
    return this.quantite * this.prixUnitaire;
  }
}

