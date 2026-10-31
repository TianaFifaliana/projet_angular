import { Component ,computed,signal} from '@angular/core';

@Component({
  selector: 'app-exemple-signaux',
  imports: [],
  templateUrl: './exemple-signaux.html',
  styleUrl: './exemple-signaux.css',
})
export class ExempleSignaux {
  prixUnitaire = signal(5000);
  quantite = signal(2);
  total = computed(() => {
    return this.prixUnitaire() * this.quantite();
  });
  augmenterQuantite():void{
    this.quantite.update((q)=>
      q+1
    );
  }
  diminuerQuantite():void{
    this.quantite.update(q=> Math.max(0,q+1));
  }
}
