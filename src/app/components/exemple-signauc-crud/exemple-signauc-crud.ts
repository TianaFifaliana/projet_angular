import { Component, signal,computed } from '@angular/core';
interface Produit{
  id:number;
  nom:string;
  prix:number;
}
@Component({
  selector: 'app-exemple-signauc-crud',
  imports: [],
  templateUrl: './exemple-signauc-crud.html',
  styleUrl: './exemple-signauc-crud.css',
})

export class ExempleSignaucCrud {
 produit=signal<Produit[]>([
  {
    "id" : 1,
    "nom" :"Clavier",
    "prix" :  50000
  },
  {
    "id" : 2,
    "nom" :"Souris",
    "prix" :  25000
  },
  {
    "id" : 3,
    "nom" :"Ecran",
    "prix" :  45000
  }
]);
nombrePoduits = computed(()=>this.produit().length);
ajouterProduit():void{
  const dernierId = this.produit()[this.nombrePoduits() -1].id;
  const idVaovao = dernierId+1;
  const nouveauProduit: Produit ={id: idVaovao,nom: "casque", prix: 80000}
  this.produit.update(liste=> [...liste, nouveauProduit]);
}
supprimerProduit(id: number): void{
  this.produit.update(liste=>
    liste.filter(produit => produit.id !==id)
  );
}

}
