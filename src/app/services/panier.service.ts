import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PanierService {
    private panier = new BehaviorSubject<any[]>([]);
    panier$ = this.panier.asObservable();
    
   ajouterProduit(produit: any) {
  const current = this.panier.value;
  const index = current.findIndex(p => p.nom === produit.nom);

  if (index !== -1) {
    const updatedProduit = { ...current[index] };
    updatedProduit.quantite += produit.quantite;

    const updatedPanier = [...current];
    updatedPanier[index] = updatedProduit;

    this.panier.next(updatedPanier);
  } else {
    this.panier.next([...current, produit]);
  }
}
supprimerProduit(index: number): void {
  const produits = [...this.panier.value]; 
  produits.splice(index, 1); 
  this.panier.next(produits); 
}


   getQuantite(): number {
    return this.panier.value.length;
  }

   getProduits(): any[] {
    return this.panier.value;
  }
  getTotal(): number {
  return this.panier.value.reduce((total, produit) => {
    return total + (produit.prix * produit.quantite);
  }, 0);
}


  viderPanier() {
    this.panier.next([]);
  }

}
